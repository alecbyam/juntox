from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class ProjectCreate(BaseModel):
    name: str
    description: Optional[str] = None
    sector: Optional[str] = None
    budget: Optional[float] = None


class ProjectUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    sector: Optional[str] = None
    status: Optional[str] = None
    budget: Optional[float] = None


class ProjectResponse(BaseModel):
    id: int
    name: str
    description: Optional[str]
    sector: Optional[str]
    status: str
    budget: Optional[float]
    created_at: datetime

    class Config:
        from_attributes = True
