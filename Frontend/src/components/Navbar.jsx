import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow fixed-top" style={{ background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' }}>
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold fs-4" to="/">
                    <span style={{ fontSize: '1.8rem' }}><i className="bi bi-house-fill"></i></span>
                </Link>
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
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link fw-bold fs-5 px-3 hover-link text-white" to="/about">
                                <i className="bi bi-info-circle-fill"></i> About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold fs-5 px-3 hover-link text-white" to="/users">
                                <i className="bi bi-people-fill"></i> Users
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2 search-input"
                            type="search"
                            placeholder="Buscar..."
                            aria-label="Search"
                            style={{ borderRadius: '25px', padding: '10px 20px', border: '2px solid #fff' }}
                        />
                        <button
                            className="btn btn-light fw-bold"
                            type="submit"
                            style={{ borderRadius: '25px', padding: '10px 25px' }}
                        >
                            Buscar
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;