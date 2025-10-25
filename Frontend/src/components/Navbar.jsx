import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark shadow fixed-top"
            style={{ background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' }}
        >
            <div className="container-fluid d-flex align-items-center">
                {/* Toggle para móvil */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav centrado (ocupa ~60%) */}
                <div className="collapse navbar-collapse nav-center justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex align-items-center gap-3">
                        <li className="nav-item">
                            <Link className="nav-link fw-bold fs-5 text-white hover-link" to="/"><i className="bi bi-house-fill"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold fs-5 text-white hover-link" to="/about">
                                <i className="bi bi-info-circle-fill"></i> About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold fs-5 text-white hover-link" to="/users">
                                <i className="bi bi-people-fill"></i> Users
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Logo / texto a la derecha (ocupa ~40%) */}
                <div className="logo-block ms-auto d-flex align-items-center justify-content-end">
                    {/* Puedes cambiar el texto por una imagen: <img src="..." alt="EDOMOCAR" /> */}
                    <Link to="/" className="navbar-brand fw-bold text-white mb-0 d-flex align-items-center" style={{ letterSpacing: '.6px' }}>
                        <img src="/EDOMOCAR.png" alt="EDOMOCAR" className="brand-logo" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;