from fastapi import APIRouter, HTTPException
from ..services.ai_service import JuntoXAIService
from ..schemas.ai import (
    AIAnalysisRequest,
    AIBusinessPlanRequest,
    AIReportRequest,
    AIResponse,
    AIStatusResponse,
)

router = APIRouter()
service = JuntoXAIService()


@router.get('/status', response_model=AIStatusResponse)
def ai_status():
    if service.is_configured():
        return {'status': 'operational', 'service': 'JuntoX AI', 'description': 'Assistant d\'analyse, business plan et rapport.'}
    return {
        'status': 'not_configured',
        'service': 'JuntoX AI',
        'description': 'Assistant d’analyse, business plan et rapport. Configure OPENAI_API_KEY pour l’activer.',
    }


@router.post('/analyze', response_model=AIResponse)
def analyze_project(payload: AIAnalysisRequest):
    try:
        output = service.analyze_project(payload)
        return {'result': output}
    except RuntimeError as error:
        raise HTTPException(status_code=503, detail=str(error)) from error
    except Exception as error:
        raise HTTPException(status_code=500, detail=str(error)) from error


@router.post('/business-plan', response_model=AIResponse)
def business_plan(payload: AIBusinessPlanRequest):
    try:
        output = service.generate_business_plan(payload)
        return {'result': output}
    except RuntimeError as error:
        raise HTTPException(status_code=503, detail=str(error)) from error
    except Exception as error:
        raise HTTPException(status_code=500, detail=str(error)) from error


@router.post('/report', response_model=AIResponse)
def generate_report(payload: AIReportRequest):
    try:
        output = service.generate_report(payload)
        return {'result': output}
    except RuntimeError as error:
        raise HTTPException(status_code=503, detail=str(error)) from error
    except Exception as error:
        raise HTTPException(status_code=500, detail=str(error)) from error
