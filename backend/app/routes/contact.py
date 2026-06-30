from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..db import get_db
from ..models import ContactMessage
from ..schemas.contact import ContactCreate, ContactResponse
from typing import List

router = APIRouter()


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


@router.get('', response_model=List[ContactResponse])
def list_contacts(db: Session = Depends(get_db)):
    return db.query(ContactMessage).order_by(ContactMessage.created_at.desc()).limit(50).all()
