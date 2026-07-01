from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from ..db import get_db
from ..models import User
from ..schemas.user import UserCreate, UserLogin, Token, UserResponse
from ..services.user_service import UserService
from ..auth import AuthService, get_current_user
from ..rate_limit import limiter

router = APIRouter()
user_service = UserService()
auth_service = AuthService()


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
