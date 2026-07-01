import os
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from .rate_limit import limiter
from .main_router import router
from .db import engine, SessionLocal
from .models import Base


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


@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    _seed_admin()
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
