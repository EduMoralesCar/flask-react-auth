# 🚀 flask-react-auth

![Typing](https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&pause=1000&color=2F80ED&center=true&width=800&lines=Full-stack+CRUD+con+Flask+%7C+React+%7C+MongoDB)

[![Flask](https://img.shields.io/badge/Flask-000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/)
[![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)


Un proyecto full‑stack llamativo y práctico: API en Flask (Python) + Frontend en React (Hooks) + MongoDB. Incluye registro de usuarios con las operaciones de CRUD . El frontend utiliza Bootstrap y Bootstrap Icons para un diseño moderno y rápido.


---

# Contenido rápido
- 📌 Descripción
- ⚙️ Requisitos
- ⏱️ Clonar & Ejecutar (rápido)
- 🔁 Flujo: Backend ↔ Frontend
- 🧰 Herramientas recomendadas
- 🐳 Opcional: Docker

---

# Descripción
El proyecto ofrece sobre registro de usuarios mediante formulario. Ideal para aprender integración entre backend y frontend con MongoDB como almacenamiento.

## Herramientas usadas (recomendadas)
- MongoDB (local o Atlas)
- Postman (probar endpoints)
- Visual Studio Code (IDE)
- Node.js + npm / yarn
- Python 3.8+
- Bootstrap + Bootstrap Icons (estilos en frontend)
- Git

# Requisitos mínimos
- Git
- Node.js (>= 14)
- Python (>= 3.8)
- MongoDB (o conexión a MongoDB Atlas)

# Clonar el repositorio (rápido)
```bash
git clone https://github.com/EduMoralesCar/flask-react-auth.git
cd flask-react-auth
```

En el frontend (`frontend/.env`):
```
REACT_APP_API_URL=http://localhost:5000/api
```

# Instalación y ejecución (desarrollo)

Backend (Flask)
```bash
cd backend
python -m venv venv
# activar venv
# macOS / Linux
source venv/bin/activate
# Windows (PowerShell)
venv\Scripts\Activate.ps1

pip install -r requirements.txt
# iniciar
flask run
# o
python app.py
```

Frontend (React)
```bash
cd frontend
npm install
npm start
# app disponible en http://localhost:3000
```

# Notas rápidas
- Asegúrate que el backend esté corriendo en el puerto que use REACT_APP_API_URL.
- Si usas MongoDB Atlas, reemplaza MONGO_URI por la cadena de conexión provista por Atlas.

# Probar la API con Postman
- Importa la colección (si existe `postman_collection.json`) o crea peticiones:
  - POST /api/auth/register
  - POST /api/auth/users
  - GET /api/user (protegido)

# Bootstrap & Bootstrap Icons (frontend)
Instalación:
```bash
cd frontend
npm install bootstrap bootstrap-icons
```
En src/index.js o App.js:
```js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
```

# Docker (opcional)
Ejemplo básico de docker-compose:
```yaml
version: '3.8'
services:
  mongo:
    image: mongo:6
    ports:
      - '27017:27017'
    volumes:
      - mongo_data:/data/db
  backend:
    build: ./backend
    environment:
      - MONGO_URI=mongodb://mongo:27017/flask_react_auth
    ports:
      - '5000:5000'
    depends_on:
      - mongo
  frontend:
    build: ./frontend
    ports:
      - '3000:3000'
volumes:
  mongo_data:
```
