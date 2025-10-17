import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# Leer DATABASE_URL desde variables de entorno; usa sqlite de fallback para pruebas rápidas
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./dev.db")

# create_engine: echo=True imprime SQL en consola (útil en desarrollo)
engine = create_engine(DATABASE_URL, echo=True, future=True)

# SessionLocal se usa con dependency injection en FastAPI
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine, future=True)

# Base para los modelos
Base = declarative_base()

# Helper para dependencias de FastAPI
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()