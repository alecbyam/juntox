from sqlalchemy.orm import Session
from ..auth import AuthService
from ..models import User
from ..schemas.user import UserCreate

class UserService:
    def __init__(self):
        self.auth_service = AuthService()

    def create_user(self, db: Session, payload: UserCreate) -> User:
        hashed_password = self.auth_service.get_password_hash(payload.password)
        user = User(
            email=payload.email,
            full_name=payload.full_name,
            role=payload.role,
            hashed_password=hashed_password,
            is_active=True,
        )
        db.add(user)
        db.commit()
        db.refresh(user)
        return user

    def authenticate_user(self, db: Session, email: str, password: str) -> User | None:
        user = db.query(User).filter(User.email == email).first()
        if not user or not self.auth_service.verify_password(password, user.hashed_password):
            return None
        return user
