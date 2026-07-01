from datetime import datetime
from sqlalchemy import Boolean, Column, DateTime, Enum, ForeignKey, Integer, Numeric, String, Text
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True, nullable=False)
    hashed_password = Column(Text, nullable=False)
    full_name = Column(String(255), nullable=True)
    role = Column(String(50), nullable=False, default='client')
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    projects = relationship('Project', back_populates='owner')
    contact_messages = relationship('ContactMessage', back_populates='user')


class Project(Base):
    __tablename__ = 'projects'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    description = Column(Text)
    sector = Column(String(100))
    status = Column(String(50), default='draft')
    budget = Column(Numeric(15, 2), nullable=True)
    owner_id = Column(Integer, ForeignKey('users.id'), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    owner = relationship('User', back_populates='projects')
    studies = relationship('Study', back_populates='project')


class Study(Base):
    __tablename__ = 'studies'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    summary = Column(Text)
    study_type = Column(String(100))
    status = Column(String(50), default='in_progress')
    project_id = Column(Integer, ForeignKey('projects.id'), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    project = relationship('Project', back_populates='studies')


class ContactMessage(Base):
    __tablename__ = 'contact_messages'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False)
    subject = Column(String(500), nullable=False)
    message = Column(Text, nullable=False)
    status = Column(String(50), default='new')
    user_id = Column(Integer, ForeignKey('users.id'), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship('User', back_populates='contact_messages')


class BlogPost(Base):
    __tablename__ = 'blog_posts'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(500), nullable=False)
    slug = Column(String(500), unique=True, nullable=False, index=True)
    excerpt = Column(Text, nullable=True)
    content = Column(Text, nullable=True)
    category = Column(String(100), nullable=True)
    published = Column(Boolean, default=False)
    author_id = Column(Integer, ForeignKey('users.id'), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    author = relationship('User', foreign_keys=[author_id])


class Investment(Base):
    __tablename__ = 'investments'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    description = Column(Text)
    amount = Column(Numeric(15, 2))
    status = Column(String(50), default='pipeline')
    sector = Column(String(100))
    created_at = Column(DateTime, default=datetime.utcnow)


class BlogPost(Base):
    __tablename__ = 'blog_posts'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(500), nullable=False)
    slug = Column(String(500), unique=True, nullable=False)
    excerpt = Column(Text)
    content = Column(Text)
    category = Column(String(100))
    published = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class AuditLog(Base):
    __tablename__ = 'audit_logs'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=True)
    action = Column(String(255), nullable=False)
    resource = Column(String(255))
    details = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)
