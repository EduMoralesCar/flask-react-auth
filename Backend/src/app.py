from flask import Flask, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from flask_cors import CORS
import re

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost/python_flask_db"

# Habilitar CORS
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
    users = []
    for user in db.find():
        users.append({
            'id': str(user['_id']),
            'name': user['name'],
            'email': user['email'],
            'password': user['password']
        })
    return {'users': users}, 200


# Obtener un usuario por ID
@app.route('/users/<id>', methods=['GET'])
def getUser(id):
    user = db.find_one({"_id": ObjectId(id)})
    if user:
        return {
            'id': str(user['_id']),
            'name': user['name'],
            'email': user['email'],
            'password': user['password']
        }, 200
    return {'message': 'User not found'}, 404

# Obtener un usuario por Nombre (case insensitive)
@app.route('/user-name/<name>', methods=['GET'])
def getUserByName(name):
    pattern = f'^{re.escape(name)}$'
    user = db.find_one({"name": {"$regex": pattern, "$options": "i"}})
    if user:
        return {
            'id': str(user['_id']),
            'name': user['name'],
            'email': user['email'],
            'password': user['password']
        }, 200
    return {'message': 'User not found'}, 404


# Eliminar un usuario
@app.route('/users/<id>', methods=['DELETE'])
def deleteUser(id):
    result = db.delete_one({"_id": ObjectId(id)})
    if result.deleted_count > 0:
        return {'message': 'User deleted'}, 200
    return {'message': 'User not found'}, 404

# Actualizar un usuario
@app.route('/users/<id>', methods=['PUT'])
def updateUser(id):
    data = request.get_json(silent=True) or {}
    result = db.update_one({"_id": ObjectId(id)}, {"$set": data})
    if result.modified_count > 0:
        return {'message': 'User updated'}, 200
    return {'message': 'User not found'}, 404


# Inicialización de la BD
if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)