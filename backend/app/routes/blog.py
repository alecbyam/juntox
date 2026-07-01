from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List
from ..db import get_db
from ..models import BlogPost, User
from ..schemas.blog import BlogPostCreate, BlogPostUpdate, BlogPostResponse, BlogPostSummary
from ..auth import get_current_user, require_admin

router = APIRouter()


@router.get('', response_model=List[BlogPostSummary])
def list_posts(
    page: int = Query(1, ge=1),
    per_page: int = Query(10, ge=1, le=50),
    category: str | None = Query(None),
    db: Session = Depends(get_db),
):
    """Lister les articles publiés (accès public)."""
    q = db.query(BlogPost).filter(BlogPost.published == True)  # noqa: E712
    if category:
        q = q.filter(BlogPost.category == category)
    total = q.count()
    posts = q.order_by(BlogPost.created_at.desc()).offset((page - 1) * per_page).limit(per_page).all()
    return posts


@router.get('/all', response_model=List[BlogPostSummary])
def list_all_posts(
    db: Session = Depends(get_db),
    _: User = Depends(require_admin),
):
    """Lister tous les articles (admin uniquement)."""
    return db.query(BlogPost).order_by(BlogPost.created_at.desc()).all()


@router.get('/{slug}', response_model=BlogPostResponse)
def get_post(slug: str, db: Session = Depends(get_db)):
    """Récupérer un article publié par son slug (accès public)."""
    post = db.query(BlogPost).filter(BlogPost.slug == slug, BlogPost.published == True).first()  # noqa: E712
    if not post:
        raise HTTPException(status_code=404, detail='Article introuvable')
    return post


@router.post('', response_model=BlogPostResponse, status_code=201)
def create_post(
    payload: BlogPostCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(require_admin),
):
    """Créer un article (admin uniquement)."""
    existing = db.query(BlogPost).filter(BlogPost.slug == payload.slug).first()
    if existing:
        raise HTTPException(status_code=409, detail='Un article avec ce slug existe déjà')
    post = BlogPost(**payload.model_dump(), author_id=current_user.id)
    db.add(post)
    db.commit()
    db.refresh(post)
    return post


@router.put('/{slug}', response_model=BlogPostResponse)
def update_post(
    slug: str,
    payload: BlogPostUpdate,
    db: Session = Depends(get_db),
    _: User = Depends(require_admin),
):
    """Mettre à jour un article (admin uniquement)."""
    post = db.query(BlogPost).filter(BlogPost.slug == slug).first()
    if not post:
        raise HTTPException(status_code=404, detail='Article introuvable')
    for field, value in payload.model_dump(exclude_none=True).items():
        setattr(post, field, value)
    db.commit()
    db.refresh(post)
    return post


@router.delete('/{slug}', status_code=204)
def delete_post(
    slug: str,
    db: Session = Depends(get_db),
    _: User = Depends(require_admin),
):
    """Supprimer un article (admin uniquement)."""
    post = db.query(BlogPost).filter(BlogPost.slug == slug).first()
    if not post:
        raise HTTPException(status_code=404, detail='Article introuvable')
    db.delete(post)
    db.commit()
