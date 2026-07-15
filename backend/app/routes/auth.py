import secrets
from datetime import datetime, timedelta, timezone
from fastapi import APIRouter, Depends, HTTPException, Request, status
from sqlalchemy.orm import Session
from ..db import get_db
from ..models import User, PasswordResetToken
from ..schemas.user import (
    UserCreate, UserLogin, Token, UserResponse,
    ChangePasswordRequest, ForgotPasswordRequest, ResetPasswordRequest,
)
from ..services.user_service import UserService
from ..auth import AuthService, get_current_user
from ..rate_limit import limiter

router = APIRouter()
user_service = UserService()
auth_service = AuthService()

_RESET_EXPIRE_HOURS = 24


@router.post('/register', response_model=UserResponse)
@limiter.limit('5/minute')
def register_user(request: Request, payload: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == payload.email).first()
    if existing:
        raise HTTPException(status_code=400, detail='User already exists')
    user = user_service.create_user(db, payload)
    return user


@router.post('/login', response_model=Token)
@limiter.limit('10/minute')
def login_user(request: Request, payload: UserLogin, db: Session = Depends(get_db)):
    user = user_service.authenticate_user(db, payload.email, payload.password)
    if not user:
        raise HTTPException(status_code=401, detail='Invalid credentials')
    token = auth_service.create_access_token(subject=str(user.id))
    return {'access_token': token, 'token_type': 'bearer', 'role': user.role, 'full_name': user.full_name}


@router.get('/me', response_model=UserResponse)
def get_me(current_user: User = Depends(get_current_user)):
    return current_user


@router.put('/change-password')
def change_password(
    payload: ChangePasswordRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Changer son propre mot de passe (utilisateur authentifié)."""
    if not auth_service.verify_password(payload.current_password, current_user.hashed_password):
        raise HTTPException(status_code=400, detail='Mot de passe actuel incorrect')
    current_user.hashed_password = auth_service.get_password_hash(payload.new_password)
    db.commit()
    return {'message': 'Mot de passe modifié avec succès'}


@router.post('/forgot-password')
@limiter.limit('3/minute')
def forgot_password(
    request: Request,
    payload: ForgotPasswordRequest,
    db: Session = Depends(get_db),
):
    """Demander la réinitialisation du mot de passe."""
    user = db.query(User).filter(User.email == payload.email).first()
    # Always return the same message to avoid email enumeration
    if not user:
        return {'message': 'Si cet email est enregistré, un token a été généré.'}

    # Invalidate previous unused tokens for this user
    db.query(PasswordResetToken).filter(
        PasswordResetToken.user_id == user.id,
        PasswordResetToken.used == False,  # noqa: E712
    ).delete(synchronize_session=False)

    token = secrets.token_urlsafe(64)
    reset = PasswordResetToken(
        user_id=user.id,
        token=token,
        expires_at=datetime.now(timezone.utc) + timedelta(hours=_RESET_EXPIRE_HOURS),
    )
    db.add(reset)
    db.commit()

    return {'message': 'Si cet email est enregistré, un lien de réinitialisation a été envoyé.'}


@router.post('/reset-password')
def reset_password(
    payload: ResetPasswordRequest,
    db: Session = Depends(get_db),
):
    """Réinitialiser le mot de passe avec un token valide."""
    reset = db.query(PasswordResetToken).filter(
        PasswordResetToken.token == payload.token,
        PasswordResetToken.used == False,  # noqa: E712
        PasswordResetToken.expires_at > datetime.now(timezone.utc),
    ).first()

    if not reset:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail='Token invalide ou expiré',
        )

    user = db.query(User).filter(User.id == reset.user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail='Utilisateur introuvable')

    user.hashed_password = auth_service.get_password_hash(payload.new_password)
    reset.used = True
    db.commit()

    return {'message': 'Mot de passe réinitialisé avec succès'}
