from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..db import get_db
from ..models import Project, User
from ..schemas.project import ProjectCreate, ProjectUpdate, ProjectResponse
from ..auth import get_current_user, require_admin
from typing import List

router = APIRouter()


@router.post('', response_model=ProjectResponse)
def create_project(
    payload: ProjectCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    project = Project(
        name=payload.name,
        description=payload.description,
        sector=payload.sector,
        budget=payload.budget,
        owner_id=current_user.id,
    )
    db.add(project)
    db.commit()
    db.refresh(project)
    return project


# Admin sees all projects; other users see only their own
@router.get('', response_model=List[ProjectResponse])
def list_projects(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if current_user.role == 'admin':
        return db.query(Project).order_by(Project.created_at.desc()).limit(50).all()
    return (
        db.query(Project)
        .filter(Project.owner_id == current_user.id)
        .order_by(Project.created_at.desc())
        .all()
    )


@router.get('/{project_id}', response_model=ProjectResponse)
def get_project(
    project_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail='Project not found')
    if current_user.role != 'admin' and project.owner_id != current_user.id:
        raise HTTPException(status_code=403, detail='Access forbidden')
    return project


@router.patch('/{project_id}', response_model=ProjectResponse)
def update_project(
    project_id: int,
    payload: ProjectUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail='Project not found')
    if current_user.role != 'admin' and project.owner_id != current_user.id:
        raise HTTPException(status_code=403, detail='Access forbidden')

    update_data = payload.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(project, key, value)

    db.commit()
    db.refresh(project)
    return project
