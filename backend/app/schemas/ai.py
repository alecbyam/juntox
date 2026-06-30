from pydantic import BaseModel

class AIAnalysisRequest(BaseModel):
    name: str
    description: str
    objective: str

class AIBusinessPlanRequest(BaseModel):
    company_name: str
    summary: str
    target_audience: str

class AIReportRequest(BaseModel):
    topic: str
    context: str
    goal: str

class AIResponse(BaseModel):
    result: str

class AIStatusResponse(BaseModel):
    status: str
    service: str
    description: str
