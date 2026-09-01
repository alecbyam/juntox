from datetime import datetime
from typing import Optional
from pydantic import BaseModel, Field, computed_field, field_validator
import re


class BlogPostCreate(BaseModel):
    title: str
    slug: str
    excerpt: Optional[str] = None
    content: Optional[str] = None
    category: Optional[str] = None
    published: bool = False

    @field_validator('slug')
    @classmethod
    def slug_format(cls, v: str) -> str:
        if not re.match(r'^[a-z0-9]+(?:-[a-z0-9]+)*$', v):
            raise ValueError('Le slug doit être en kebab-case (lettres minuscules, chiffres et tirets)')
        return v


class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    excerpt: Optional[str] = None
    content: Optional[str] = None
    category: Optional[str] = None
    published: Optional[bool] = None


class BlogPostResponse(BaseModel):
    id: int
    title: str
    slug: str
    excerpt: Optional[str]
    content: Optional[str]
    category: Optional[str]
    published: bool
    created_at: datetime
    updated_at: Optional[datetime]

    model_config = {'from_attributes': True}

    @computed_field
    @property
    def read_minutes(self) -> int:
        words = len((self.content or '').split())
        return max(1, round(words / 200))


class BlogPostSummary(BaseModel):
    id: int
    title: str
    slug: str
    excerpt: Optional[str]
    category: Optional[str]
    published: bool
    created_at: datetime
    # Lu depuis l'objet ORM (from_attributes) pour calculer read_minutes,
    # mais jamais serialise : la liste d'articles n'a pas besoin du corps
    # complet, seulement du temps de lecture qui en derive.
    content: Optional[str] = Field(default=None, exclude=True)

    model_config = {'from_attributes': True}

    @computed_field
    @property
    def read_minutes(self) -> int:
        words = len((self.content or '').split())
        return max(1, round(words / 200))
