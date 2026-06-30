from pydantic import BaseModel, EmailStr

# Roles a user may self-assign via public registration. Staff roles
# (admin, employe, consultant) are provisioned internally only.
SELF_SERVICE_ROLES = {'client', 'investisseur', 'partenaire'}

class UserBase(BaseModel):
    email: EmailStr
    full_name: str | None = None
    role: str = 'client'

class UserCreate(UserBase):
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(UserBase):
    id: int
    is_active: bool

    model_config = {
        'from_attributes': True
    }

class Token(BaseModel):
    access_token: str
    token_type: str = 'bearer'
    role: str
    full_name: str | None = None
