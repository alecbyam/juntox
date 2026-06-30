import os
from dotenv import load_dotenv
from .db import engine
from .models import Base, User
from .auth import AuthService

load_dotenv()

if __name__ == '__main__':
    Base.metadata.create_all(bind=engine)
    admin_email = os.getenv('ADMIN_EMAIL', 'admin@juntox.africa')
    admin_password = os.getenv('ADMIN_PASSWORD', 'ChangeMe123!')

    db = None
    from sqlalchemy.orm import Session
    from .db import SessionLocal

    db = SessionLocal()
    existing = db.query(User).filter(User.email == admin_email).first()
    if not existing:
        auth_service = AuthService()
        hashed_password = auth_service.get_password_hash(admin_password)
        admin = User(
            email=admin_email,
            hashed_password=hashed_password,
            full_name='Administrateur JuntoX',
            role='admin',
            is_active=True,
        )
        db.add(admin)
        db.commit()
        print(f'Admin user created: {admin_email}')
    else:
        print(f'Admin user already exists: {admin_email}')
    db.close()
