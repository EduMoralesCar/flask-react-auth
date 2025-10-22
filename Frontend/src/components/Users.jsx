import { useState, useEffect } from "react";

function Users() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [showPassword, setShowPassword] = useState(false); // ← nuevo


    // Cargar usuarios al montar el componente
    useEffect(() => {
        getUsers();
    }, []);

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
                // Recargar la lista de usuarios
                getUsers();
            })
            .catch(error => {
                console.error("Error al agregar usuario:", error);
                alert("Error al agregar usuario: " + error.message);
            });
    };

    // Función para obtener la lista de usuarios
    const getUsers = () => {
        fetch(import.meta.env.VITE_API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Usuarios obtenidos:", data);
                setUsers(data.users);
            })
            .catch(error => {
                console.error("Error al obtener usuarios:", error);
            });
    };

    return (
        <div className="container-fluid users-page">
            {/* HERO */}
            <div className="row justify-content-center users-hero align-items-center">
                <div className="col-12 col-xxl-12 d-flex flex-wrap justify-content-between align-items-center">
                    <div className="py-2">
                        <h1 className="display-6 fw-bold mb-1">Gestión de Usuarios</h1>
                        <p className="text-light-50 mb-0">CRUD con Flask API, React Hooks y MongoDB</p>
                    </div>
                    <img
                        src="https://cdn.jsdelivr.net/gh/tabler/tabler-icons@2.47.0/icons/users.svg"
                        alt="users"
                        width={140}
                        height={140}
                        className="animate-fade-in"
                        onError={(e) => {
                            e.currentTarget.src = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/people-fill.svg";
                        }}
                        style={{ objectFit: "contain", opacity: 0.95 }}
                    />
                </div>
            </div>

            {/* CONTENIDO */}
            <div className="row justify-content-center mt-4">
                <div className="col-12 col-xxl-12">
                    {/* Stats */}
                    <div className="row g-3 mb-3">
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                            <div className="card shadow-sm border-0 stat-card animate-slide-up">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <span style={{ fontSize: 28 }}>👥</span>
                                    <div>
                                        <div className="small text-muted">Usuarios Totales</div>
                                        <div className="h5 m-0">{users.length}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form + Tabla */}
                    <div className="row g-4">
                        {/* Formulario (más ancho) */}
                        <div className="col-12 col-lg-5">
                            <div className="card shadow-sm border-0 h-100 animate-slide-up">
                                <div className="card-body p-4">
                                    <h2 className="h5 mb-3">Agregar Usuario</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="Nombre de usuario"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                type="email"
                                                className="form-control form-control-lg"
                                                placeholder="Correo electrónico"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <div className="input-group">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    className="form-control form-control-lg"
                                                    placeholder="Contraseña"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary"
                                                    onClick={() => setShowPassword((v) => !v)}
                                                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                                    title={showPassword ? "Ocultar" : "Mostrar"}
                                                >
                                                    {showPassword ? <i className="bi bi-eye-fill"></i> : <i className="bi bi-eye-slash-fill"></i>}
                                                </button>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-lg w-100">
                                            Guardar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Tabla (más flexible) */}
                        <div className="col-12 col-lg-7">
                            <div className="card shadow-sm border-0 animate-fade-in">
                                <div className="card-body p-4">
                                    <h2 className="h5 mb-3">Lista de Usuarios</h2>
                                    {users.length === 0 ? (
                                        <p className="text-muted m-0">No hay usuarios registrados</p>
                                    ) : (
                                        <div className="table-responsive">
                                            <table className="table table-hover align-middle m-0">
                                                <thead className="table-light sticky-top">
                                                    <tr>
                                                        <th style={{ width: '35%' }}>Nombre</th>
                                                        <th style={{ width: '45%' }}>Email</th>
                                                        <th style={{ width: '20%' }} className="text-end text-center">Acciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users.map((user) => (
                                                        <tr key={user.id}>
                                                            <td>{user.name}</td>
                                                            <td>{user.email}</td>
                                                            <td className="text-end">
                                                                {/* Acciones con ancho uniforme y separación */}
                                                                <div className="d-inline-flex gap-2 actions-cell">
                                                                    <button type="button" className="btn btn-warning btn-sm btn-action">Editar</button>
                                                                    <button type="button" className="btn btn-danger btn-sm btn-action">Eliminar</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Users;