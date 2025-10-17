# ✅ Comando correcto para ejecutar tu app
Para ejecutar tu aplicación, utiliza el siguiente comando en la terminal:

```bash
uvicorn app.main:app --reload
```

# ✅ Solución: instalar uvicorn en tu entorno
```bash
pip install "uvicorn[standard]"
```
## 🧠 Verifica instalación
```bash
uvicorn --version
```
# ✅ Solución recomendada: recrear el entorno virtual

```bash
Remove-Item -Recurse -Force .venv
```
1. Crear un nuevo entorno virtual limpio:
```bash
python -m venv .venv
```
2. Activar el entorno virtual
```bash
.\.venv\Scripts\Activate.ps1 # PowerShell
.\.venv\Scripts\activate.bat # Cmd
```

# Instalar dependencias necesarias
Si ya tienes un requirements.txt, simplemente:
```bash
pip install -r requirements.txt
```

Si no lo tienes aún, instala manualmente:
```bash
pip install fastapi "uvicorn[standard]" sqlalchemy pymysql python-dotenv passlib python-jose alembic
```

Una vez instalado, puedes verificar que todo está correcto con:
```bash
pip freeze
```
# Esto instalará el paquete email-validator, que es requerido por pydantic.EmailStr.

```bash
python -m pip install 'pydantic[email]'
```

Si estás usando un requirements.txt, puedes añadir esta línea para que no se te olvide en el futuro:
```bash
pydantic[email]
```
Y luego instalar todo con:
```bash
pip install -r requirements.txt
```
Una vez instalado, puedes volver a ejecutar tu app con:
```bash
uvicorn app.main:app --reload
```
# ✅ Solución: instalar python-multipart
es una dependencia que FastAPI necesita para procesar formularios tipo multipart/form-data
```bash
pip install python-multipart
```

```bash
```

```bash
```

```bash
```