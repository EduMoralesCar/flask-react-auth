# Ejecutar: python scripts/test_db_connect.py
from sqlalchemy import text
from app.database import engine

with engine.connect() as conn:
    result = conn.execute(text("SELECT 1"))
    print("Conexión OK, resultado:", result.scalar())