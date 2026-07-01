import logging
from fastapi import APIRouter, Depends, HTTPException
from ..services.ai_service import JuntoXAIService
from ..schemas.ai import (
    AIAnalysisRequest,
    AIBusinessPlanRequest,
    AIReportRequest,
    AIResponse,
    AIStatusResponse,
)
from ..auth import get_current_user
from ..models import User

logger = logging.getLogger(__name__)

router = APIRouter()
service = JuntoXAIService()


# Status is public — let the frontend know if AI is operational
@router.get('/status', response_model=AIStatusResponse)
def ai_status():
    if service.is_configured():
        return {
            'status': 'operational',
            'service': 'JuntoX AI',
            'description': "Assistant d'analyse, business plan et rapport.",
        }
    return {
        'status': 'not_configured',
        'service': 'JuntoX AI',
        'description': 'IA non configurée. Contactez votre administrateur.',
    }


@router.post('/analyze', response_model=AIResponse)
def analyze_project(
    payload: AIAnalysisRequest,
    _: User = Depends(get_current_user),
):
    try:
        output = service.analyze_project(payload)
        return {'result': output}
    except RuntimeError as error:
        raise HTTPException(status_code=503, detail='Service IA indisponible') from error
    except Exception as error:
        logger.error('AI analyze error: %s', error)
        raise HTTPException(status_code=500, detail='Erreur interne du service IA') from error


@router.post('/business-plan', response_model=AIResponse)
def business_plan(
    payload: AIBusinessPlanRequest,
    _: User = Depends(get_current_user),
):
    try:
        output = service.generate_business_plan(payload)
        return {'result': output}
    except RuntimeError as error:
        raise HTTPException(status_code=503, detail='Service IA indisponible') from error
    except Exception as error:
        logger.error('AI business-plan error: %s', error)
        raise HTTPException(status_code=500, detail='Erreur interne du service IA') from error


@router.post('/report', response_model=AIResponse)
def generate_report(
    payload: AIReportRequest,
    _: User = Depends(get_current_user),
):
    try:
        output = service.generate_report(payload)
        return {'result': output}
    except RuntimeError as error:
        raise HTTPException(status_code=503, detail='Service IA indisponible') from error
    except Exception as error:
        logger.error('AI report error: %s', error)
        raise HTTPException(status_code=500, detail='Erreur interne du service IA') from error
