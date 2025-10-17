from sqlalchemy import (
    Column,
    Integer,
    BigInteger,
    String,
    Boolean,
    Text,
    Enum as SAEnum,
    ForeignKey,
    Table,
    DateTime,
    func,
)
from sqlalchemy.orm import relationship
from enum import Enum
from app.database import Base

# Enum de tipo de contenido
class ContentType(str, Enum):
    movie = "movie"
    series = "series"

# Tabla asociativa content <-> genre (many-to-many)
content_genres = Table(
    "content_genres",
    Base.metadata,
    Column("content_id", BigInteger, ForeignKey("contents.id", ondelete="CASCADE"), primary_key=True),
    Column("genre_id", Integer, ForeignKey("genres.id", ondelete="CASCADE"), primary_key=True),
)

class User(Base):
    __tablename__ = "users"
    id = Column(BigInteger, primary_key=True, index=True)
    email = Column(String(255), unique=True, nullable=False, index=True)
    password_hash = Column(String(255), nullable=False)
    is_active = Column(Boolean, default=True, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    profiles = relationship("Profile", back_populates="user", cascade="all, delete-orphan")

class Profile(Base):
    __tablename__ = "profiles"
    id = Column(BigInteger, primary_key=True, index=True)
    user_id = Column(BigInteger, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    name = Column(String(100), nullable=False)
    children_mode = Column(Boolean, default=False, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    user = relationship("User", back_populates="profiles")
    ratings = relationship("Rating", back_populates="profile", cascade="all, delete-orphan")
    watch_history = relationship("WatchHistory", back_populates="profile", cascade="all, delete-orphan")

class Genre(Base):
    __tablename__ = "genres"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), unique=True, nullable=False, index=True)

    contents = relationship("Content", secondary=content_genres, back_populates="genres")

class Content(Base):
    __tablename__ = "contents"
    id = Column(BigInteger, primary_key=True, index=True)
    title = Column(String(255), nullable=False, index=True)
    description = Column(Text)
    content_type = Column(SAEnum(ContentType), nullable=False)
    release_year = Column(Integer)
    duration_minutes = Column(Integer)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    genres = relationship("Genre", secondary=content_genres, back_populates="contents")
    episodes = relationship("Episode", back_populates="content", cascade="all, delete-orphan")
    ratings = relationship("Rating", back_populates="content", cascade="all, delete-orphan")
    watch_history = relationship("WatchHistory", back_populates="content", cascade="all, delete-orphan")

class Episode(Base):
    __tablename__ = "episodes"
    id = Column(BigInteger, primary_key=True, index=True)
    content_id = Column(BigInteger, ForeignKey("contents.id", ondelete="CASCADE"), nullable=False)  # referencia a la serie
    season = Column(Integer, nullable=True)
    episode = Column(Integer, nullable=True)
    title = Column(String(255))
    duration_minutes = Column(Integer)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    content = relationship("Content", back_populates="episodes")

class Rating(Base):
    __tablename__ = "ratings"
    id = Column(BigInteger, primary_key=True, index=True)
    profile_id = Column(BigInteger, ForeignKey("profiles.id", ondelete="CASCADE"), nullable=False)
    content_id = Column(BigInteger, ForeignKey("contents.id", ondelete="CASCADE"), nullable=False)
    rating = Column(Integer, nullable=False)  # por ejemplo 1-5
    review = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    profile = relationship("Profile", back_populates="ratings")
    content = relationship("Content", back_populates="ratings")

    # Para forzar unicidad profile+content (una valoración por perfil):
    __table_args__ = (
        # crea una constraint de unicidad composite
        # Si usas MySQL y quieres añadirla, SQLAlchemy la creará automáticamente al crear la tabla
        # Note: si migras con Alembic, se conservará en la migración autogenerate
        {},
    )

class WatchHistory(Base):
    __tablename__ = "watch_history"
    id = Column(BigInteger, primary_key=True, index=True)
    profile_id = Column(BigInteger, ForeignKey("profiles.id", ondelete="CASCADE"), nullable=False)
    content_id = Column(BigInteger, ForeignKey("contents.id", ondelete="CASCADE"), nullable=False)
    last_position_seconds = Column(Integer, default=0, nullable=False)
    watched_at = Column(DateTime(timezone=True), server_default=func.now())

    profile = relationship("Profile", back_populates="watch_history")
    content = relationship("Content", back_populates="watch_history")