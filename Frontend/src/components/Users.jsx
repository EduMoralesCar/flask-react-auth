import { useState } from "react";

function Users() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(import.meta.env.VITE_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Usuario agregado:", data);
                alert("Usuario agregado exitosamente");
                setName("");
                setEmail("");
                setPassword("");
            })
            .catch(error => {
                console.error("Error al agregar usuario:", error);
                alert("Error al agregar usuario: " + error.message);
            });
    };

    return (
        <div className="row">
            <div className="col-md-8">
                <h1>Users</h1>
                <form onSubmit={handleSubmit} className="card card-body">
                    {/* Formulario para agregar usuario */}
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Nombre de usuario"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    {/* Campo para correo electrónico */}
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control mb-2"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {/* Campo para contraseña */}
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control mb-2"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {/* Botón para agregar usuario */}
                    <button type="submit" className="btn btn-primary btn-block">Agregar</button>

                </form>
            </div>
            <div className="col-md-4">
                <h2>Lista de usuarios</h2>

            </div>
        </div>
    );
}

export default Users;