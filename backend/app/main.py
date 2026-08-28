import os
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from .rate_limit import limiter
from .main_router import router
from sqlalchemy import text
from .db import engine, SessionLocal
from .models import Base


def _repair_schema_drift() -> None:
    """Base.metadata.create_all() ne crée que les tables absentes — il n'ajoute
    jamais de colonne à une table qui existe déjà. Sans Alembic (voir memoire
    project-juntox-platform, M-03), un modèle modifié après la 1ère création
    d'une table dérive silencieusement de la prod jusqu'à un crash au premier
    SELECT/INSERT qui touche la colonne manquante — c'est ce qui est arrivé à
    blog_posts.author_id, ajouté au modèle après coup. Patch minimal et sûr
    (IF NOT EXISTS = no-op si déjà là) en attendant une vraie migration."""
    try:
        with engine.begin() as conn:
            conn.execute(text(
                'ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS author_id INTEGER REFERENCES users(id)'
            ))
    except Exception as exc:
        print(f'[JuntoX] Schema drift repair failed (non bloquant) : {exc}')


def _seed_admin() -> None:
    """Create the admin user from env vars if it does not exist yet."""
    admin_email = os.getenv('ADMIN_EMAIL', '').strip()
    admin_password = os.getenv('ADMIN_PASSWORD', '').strip()
    if not admin_email or not admin_password:
        return
    from .models import User
    from .auth import AuthService
    db = SessionLocal()
    try:
        existing = db.query(User).filter(User.email == admin_email).first()
        if existing:
            changed = False
            if existing.role != 'admin':
                existing.role = 'admin'
                changed = True
            if not existing.is_active:
                existing.is_active = True
                changed = True
            if changed:
                db.commit()
                print(f'[JuntoX] Admin user updated: {admin_email}')
            return
        auth = AuthService()
        admin = User(
            email=admin_email,
            full_name='Administrateur JuntoX',
            role='admin',
            hashed_password=auth.get_password_hash(admin_password),
            is_active=True,
        )
        db.add(admin)
        db.commit()
        print(f'[JuntoX] Admin user created: {admin_email}')
    except Exception as exc:
        print(f'[JuntoX] Admin seeding failed: {exc}')
        db.rollback()
    finally:
        db.close()


def _seed_blog_posts() -> None:
    """Migre les 7 articles historiques (ex frontend/lib/blog-data.ts, contenu
    déjà publié publiquement) vers la table blog_posts, une seule fois. Ne
    s'exécute que si la table est totalement vide — un déploiement ultérieur
    ne duplique jamais et n'écrase jamais des articles créés depuis via le
    CMS admin."""
    from .models import BlogPost, User
    from .blog_seed_data import BLOG_SEED
    db = SessionLocal()
    try:
        if db.query(BlogPost).count() > 0:
            return
        admin_email = os.getenv('ADMIN_EMAIL', '').strip()
        admin = db.query(User).filter(User.email == admin_email).first() if admin_email else None
        for entry in BLOG_SEED:
            db.add(BlogPost(**entry, published=True, author_id=admin.id if admin else None))
        db.commit()
        print(f'[JuntoX] Blog seeded: {len(BLOG_SEED)} articles migrated from blog-data.ts')
    except Exception as exc:
        print(f'[JuntoX] Blog seeding failed: {exc}')
        db.rollback()
    finally:
        db.close()


@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    _repair_schema_drift()
    _seed_admin()
    _seed_blog_posts()
    yield


app = FastAPI(
    title='JuntoX API',
    description='API backend pour la plateforme JuntoX SARL — IA, projets, contact et authentification.',
    version='1.0.0',
    lifespan=lifespan,
    docs_url='/docs' if os.getenv('ENVIRONMENT') != 'production' else None,
    redoc_url='/redoc' if os.getenv('ENVIRONMENT') != 'production' else None,
)

app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Add a domain here (via the ALLOWED_ORIGINS env var, comma-separated) to let
# another JuntoX product — e.g. Livroto — call this API from the browser.
allowed_origins = os.getenv('ALLOWED_ORIGINS', 'http://localhost:3000').split(',')

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allow_headers=['Authorization', 'Content-Type', 'Accept'],
)

app.include_router(router, prefix='/api')


@app.get('/')
def root():
    return {
        'name': 'JuntoX API',
        'version': '1.0.0',
        'status': 'ok',
    }
