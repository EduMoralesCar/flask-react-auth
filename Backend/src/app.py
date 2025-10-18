from flask import Flask, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from flask_cors import CORS

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost/python_flask_db"
CORS(app)
mongo = PyMongo(app)

db = mongo.db.users

# Creamos la ruta de prueba
@app.route('/users', methods=['POST'])
def createUser():
    data = request.get_json(silent=True) or {}
    user = {
        'name': data.get('name'),
        'email': data.get('email'),
        'password': data.get('password')
    }
    result = db.insert_one(user)
    return {'message': 'User created', 'id': str(result.inserted_id)}, 201

# Obtener todos los usuarios
@app.route('/users', methods=['GET'])
def getUsers():
    return 'received'

# Obtener un usuario por ID
@app.route('/user/<id>', methods=['GET'])
def getUser(id):
    return 'received'


# Eliminar un usuario
@app.route('/users/<id>', methods=['DELETE'])
def deleteUser(id):
    return 'received'

# Actualizar un usuario
@app.route('/users/<id>', methods=['PUT'])
def updateUser(id):
    return 'received'


# Inicialización de la BD
if __name__ == "__main__":
    app.run(debug=True)