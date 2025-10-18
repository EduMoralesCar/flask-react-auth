# Instalacion de Modulos de Python
# Entorno Virtual (paquete virtualenv)
Para crear un entorno virtual en Python, puedes usar el siguiente comando:

```bash
pip install virtualenv
```

Luego, para crear un entorno virtual, navega a la carpeta donde deseas crear el entorno y ejecuta:

```bash
virtualenv venv # Puedes cambiar "venv" por el nombre que prefieras para tu entorno virtual
```
Para activar el entorno virtual, usa el siguiente comando según tu sistema operativo:
- En Windows:
```bash
venv\Scripts\activate
```
- En macOS/Linux:
```bash
source venv/bin/activate
```

# Instalacion de Modulos
## Primer Modulo: Flask
Flask es un microframework para Python basado en Werkzeug y Jinja2. Para instalar Flask, usa el siguiente comando:

```bash
pip install Flask
```
Tambien puedes instalar estos 3 modulos adicionales que son comunmente usados con Flask:
```bash
python -m pip install flask flask-pymongo flask-cors
# Flask-PyMongo: Proporciona una forma sencilla de interactuar con MongoDB desde Flask.
# Flask-Cors: Habilita el soporte para CORS (Cross-Origin Resource Sharing) en aplicaciones Flask.
```
