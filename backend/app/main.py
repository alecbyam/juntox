import os
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from .rate_limit import limiter
from .main_router import router
from .db import engine
from .models import Base


@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
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
