import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [usersCount, setUsersCount] = useState(0);

    useEffect(() => {
        // intenta obtener la lista de usuarios (backend debe devolver { users: [...] } o un array)
        fetch(import.meta.env.VITE_API_URL)
            .then(r => {
                if (!r.ok) throw new Error("HTTP " + r.status);
                return r.json();
            })
            .then(data => {
                const list = data?.users ?? data;
                setUsersCount(Array.isArray(list) ? list.length : 0);
            })
            .catch(() => setUsersCount(0));
    }, []);

    return (
        <div className="container-fluid home-page py-4">
            {/* HERO */}
            <div className="home-hero row align-items-center gx-4">
                <div className="col-12 col-lg-7">
                    <h1 className="hero-title">Bienvenido a Flask + React Auth</h1>
                    <p className="hero-sub">
                        Plataforma de ejemplo Full‑Stack: API en Flask, frontend con React + Hooks y
                        almacenamiento en MongoDB. Administra usuarios fácilmente con CRUD completo.
                    </p>

                    <div className="d-flex gap-3 mt-4">
                        <Link to="/users" className="btn btn-primary btn-lg cta-btn">
                            Agregar / Ver Usuarios
                        </Link>
                        <Link to="/about" className="btn btn-outline-light btn-lg">
                            Más sobre el proyecto
                        </Link>
                    </div>

                    <div className="hero-stats d-flex gap-4 mt-4">
                        <div className="stat-card">
                            <div className="stat-ico">👥</div>
                            <div>
                                <div className="stat-label">Usuarios</div>
                                <div className="stat-value">{usersCount}</div>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-ico">⚙️</div>
                            <div>
                                <div className="stat-label">API REST</div>
                                <div className="stat-value">Flask</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-5 text-center">
                    <img
                        src="/EduMoralesCar.png"
                        alt="users"
                        className="hero-img hero-avatar"
                        onError={(e) => { e.currentTarget.src = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/people-fill.svg"; }}
                    />
                </div>
            </div>

            {/* FEATURES / CARDS */}
            <div className="row mt-5 gx-4">
                <div className="col-12 col-md-4">
                    <div className="feature-card">
                        <h3>Agregar Usuarios</h3>
                        <p>Formulario sencillo, validación mínima y envío a la API. Prueba crear varios perfiles.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="feature-card">
                        <h3>Listado Dinámico</h3>
                        <p>La lista se sincroniza con la base de datos — verás los cambios instantáneamente.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="feature-card">
                        <h3>Seguro para dev</h3>
                        <p>Variables de entorno, CORS configurado y recomendaciones para producción.</p>
                    </div>
                </div>
            </div>

            {/* FOOTER CTA */}
            <div className="row mt-5">
                <div className="col-12 text-center">
                    <p className="text-muted small">¿Listo para probar el CRUD? Haz click en "Agregar / Ver Usuarios".</p>
                </div>
            </div>
        </div>
    );
}

export default Home;