from dotenv import load_dotenv

load_dotenv()

from fastapi import FastAPI
from app.database import Base, engine
import app.models  # registrar modelos
from app.routers import auth as auth_router  # importa el router auth

# crear tablas (solo en prototipo)
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Streaming API - Prototipo")

# montar router de auth
app.include_router(auth_router.router)

@app.get("/")
def root():
    return {"status": "ok", "message": "Streaming API prototipo"}