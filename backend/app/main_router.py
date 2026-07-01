from fastapi import APIRouter
from .api.ai import router as ai_router
from .routes.auth import router as auth_router
from .routes.blog import router as blog_router
from .routes.contact import router as contact_router
from .routes.projects import router as projects_router

router = APIRouter()
router.include_router(ai_router, prefix='/ai', tags=['JuntoX AI'])
router.include_router(auth_router, prefix='/auth', tags=['Auth'])
router.include_router(blog_router, prefix='/blog', tags=['Blog'])
router.include_router(contact_router, prefix='/contact', tags=['Contact'])
router.include_router(projects_router, prefix='/projects', tags=['Projects'])


@router.get('/health')
def health_check():
    return {'status': 'healthy', 'service': 'JuntoX API'}


@router.get('/welcome')
def welcome():
    return {
        'headline': 'JuntoX API',
        'version': '0.2.0',
        'description': 'API de la plateforme JuntoX — IA, projets, contact et authentification.',
    }
