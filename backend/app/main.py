import os
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
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
    version='0.2.0',
    lifespan=lifespan,
)

# Add a domain here (via the ALLOWED_ORIGINS env var, comma-separated) to let
# another JuntoX product — e.g. Livroto — call this API from the browser.
allowed_origins = os.getenv('ALLOWED_ORIGINS', 'http://localhost:3000').split(',')

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

app.include_router(router, prefix='/api')


@app.get('/')
def root():
    return {
        'name': 'JuntoX API',
        'version': '0.2.0',
        'status': 'ok',
    }
