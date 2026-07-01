from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..db import get_db
from ..models import ContactMessage, User
from ..schemas.contact import ContactCreate, ContactResponse
from ..auth import get_current_user, require_admin
from typing import List

router = APIRouter()


# POST /api/contact remains public — it's the public contact form.
# Rate limiting is enforced at the app level via slowapi.
@router.post('', response_model=ContactResponse)
def create_contact(payload: ContactCreate, db: Session = Depends(get_db)):
    msg = ContactMessage(
        name=payload.name,
        email=payload.email,
        subject=payload.subject,
        message=payload.message,
    )
    db.add(msg)
    db.commit()
    db.refresh(msg)
    return msg


# Admin-only: list all contact messages
@router.get('', response_model=List[ContactResponse])
def list_contacts(
    db: Session = Depends(get_db),
    _: User = Depends(require_admin),
):
    return db.query(ContactMessage).order_by(ContactMessage.created_at.desc()).limit(50).all()
