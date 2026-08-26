from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from ..db import get_db
from ..models import ContactMessage, User
from ..schemas.contact import ContactCreate, ContactResponse
from ..auth import get_current_user, require_admin
from ..rate_limit import limiter
from ..email_notify import send_contact_notification
from typing import List

router = APIRouter()


@router.post('', response_model=ContactResponse)
@limiter.limit('3/minute')
def create_contact(request: Request, payload: ContactCreate, db: Session = Depends(get_db)):
    msg = ContactMessage(
        name=payload.name,
        email=payload.email,
        subject=payload.subject,
        message=payload.message,
    )
    db.add(msg)
    db.commit()
    db.refresh(msg)
    # Best-effort : ne fait jamais échouer la création si l'envoi échoue (voir email_notify.py).
    send_contact_notification(payload.name, payload.email, payload.subject, payload.message)
    return msg


# Admin-only: list all contact messages
@router.get('', response_model=List[ContactResponse])
def list_contacts(
    db: Session = Depends(get_db),
    _: User = Depends(require_admin),
):
    return db.query(ContactMessage).order_by(ContactMessage.created_at.desc()).limit(50).all()
