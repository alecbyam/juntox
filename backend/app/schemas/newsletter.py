from datetime import datetime
from pydantic import BaseModel, field_validator
import re


class NewsletterSubscribe(BaseModel):
    email: str

    @field_validator('email')
    @classmethod
    def email_valid(cls, v: str) -> str:
        v = v.strip().lower()
        if not re.match(r'^[^@\s]+@[^@\s]+\.[^@\s]+$', v):
            raise ValueError('Adresse e-mail invalide')
        return v


class NewsletterResponse(BaseModel):
    id: int
    email: str
    active: bool
    created_at: datetime

    model_config = {'from_attributes': True}
