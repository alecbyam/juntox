from pydantic import BaseModel, EmailStr
from datetime import datetime


class ContactCreate(BaseModel):
    name: str
    email: str
    subject: str
    message: str


class ContactResponse(BaseModel):
    id: int
    name: str
    email: str
    subject: str
    message: str
    status: str
    created_at: datetime

    class Config:
        from_attributes = True
