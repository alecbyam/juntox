from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from ..db import get_db
from ..models import Newsletter, User
from ..schemas.newsletter import NewsletterSubscribe, NewsletterResponse
from ..auth import require_admin

router = APIRouter()


@router.post('/subscribe', response_model=NewsletterResponse, status_code=201)
def subscribe(payload: NewsletterSubscribe, db: Session = Depends(get_db)):
    """S'abonner à la newsletter (accès public)."""
    existing = db.query(Newsletter).filter(Newsletter.email == payload.email).first()
    if existing:
        if not existing.active:
            existing.active = True
            db.commit()
            db.refresh(existing)
        return existing
    subscriber = Newsletter(email=payload.email)
    db.add(subscriber)
    db.commit()
    db.refresh(subscriber)
    return subscriber


@router.get('', response_model=List[NewsletterResponse])
def list_subscribers(
    db: Session = Depends(get_db),
    _: User = Depends(require_admin),
):
    """Lister les abonnés (admin uniquement)."""
    return db.query(Newsletter).filter(Newsletter.active == True).order_by(Newsletter.created_at.desc()).all()  # noqa: E712


@router.delete('/{subscriber_id}', status_code=204)
def unsubscribe(
    subscriber_id: int,
    db: Session = Depends(get_db),
    _: User = Depends(require_admin),
):
    """Désabonner un abonné (admin uniquement)."""
    subscriber = db.query(Newsletter).filter(Newsletter.id == subscriber_id).first()
    if not subscriber:
        raise HTTPException(status_code=404, detail='Abonné introuvable')
    subscriber.active = False
    db.commit()
