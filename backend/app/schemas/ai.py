from pydantic import BaseModel, Field, field_validator
import re

_INJECTION_PATTERNS = re.compile(
    r'(ignore\s+(previous|above|all)|forget\s+your|system\s+prompt|act\s+as\s+if|jailbreak)',
    re.IGNORECASE,
)


def _sanitize(value: str) -> str:
    value = value.strip()
    if _INJECTION_PATTERNS.search(value):
        raise ValueError('Contenu non autorisé détecté dans le champ.')
    return value


class AIAnalysisRequest(BaseModel):
    name: str = Field(max_length=200)
    description: str = Field(max_length=2000)
    objective: str = Field(max_length=500)

    @field_validator('name', 'description', 'objective', mode='before')
    @classmethod
    def sanitize(cls, v: str) -> str:
        return _sanitize(v)


class AIBusinessPlanRequest(BaseModel):
    company_name: str = Field(max_length=200)
    summary: str = Field(max_length=2000)
    target_audience: str = Field(max_length=500)

    @field_validator('company_name', 'summary', 'target_audience', mode='before')
    @classmethod
    def sanitize(cls, v: str) -> str:
        return _sanitize(v)


class AIReportRequest(BaseModel):
    topic: str = Field(max_length=200)
    context: str = Field(max_length=2000)
    goal: str = Field(max_length=500)

    @field_validator('topic', 'context', 'goal', mode='before')
    @classmethod
    def sanitize(cls, v: str) -> str:
        return _sanitize(v)


class AIResponse(BaseModel):
    result: str


class AIStatusResponse(BaseModel):
    status: str
    service: str
    description: str
