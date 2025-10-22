function About() {
    const teamMembers = [
        {
            name: "Flask API",
            role: "Backend Developer",
            image: "https://www.svgrepo.com/show/508915/flask.svg",
            description: "Construye APIs RESTful robustas y escalables"
        },
        {
            name: "React",
            role: "Frontend Developer",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            description: "Interfaz moderna y reactiva con Hooks"
        },
        {
            name: "MongoDB",
            role: "Database Manager",
            image: "https://www.svgrepo.com/show/331488/mongodb.svg",
            description: "Base de datos NoSQL flexible y potente"
        },
        {
            name: "Python",
            role: "Core Language",
            image: "https://www.svgrepo.com/show/376344/python.svg",
            description: "Lenguaje versátil para el backend"
        }
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center mb-4">Sobre Nuestro Proyecto</h1>
                    <p className="lead text-center mb-5">
                        Un sistema completo de gestión de usuarios construido con tecnologías modernas
                    </p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-6">
                    <h3>¿Qué Hacemos?</h3>
                    <p>
                        Desarrollamos una aplicación <strong>Full-Stack CRUD</strong> que permite
                        registrar, consultar, actualizar y eliminar usuarios de forma eficiente.
                        Nuestra plataforma combina lo mejor del desarrollo web moderno.
                    </p>
                    <p>
                        El proyecto utiliza <strong>Flask</strong> para crear una API RESTful robusta,
                        <strong>React</strong> con Hooks para una interfaz de usuario dinámica, y
                        <strong>MongoDB</strong> como base de datos NoSQL flexible.
                    </p>
                </div>
                <div className="col-md-6">
                    <h3>Nuestra Misión</h3>
                    <p>
                        Demostrar cómo las tecnologías modernas pueden trabajar juntas para
                        crear aplicaciones web potentes, escalables y fáciles de mantener.
                    </p>
                    <p>
                        Implementamos las mejores prácticas de desarrollo, incluyendo:
                    </p>
                    <ul>
                        <li>Arquitectura REST para comunicación cliente-servidor</li>
                        <li>Componentes reutilizables en React</li>
                        <li>Gestión eficiente de estado con Hooks</li>
                        <li>Base de datos flexible con MongoDB</li>
                    </ul>
                </div>
            </div>

            <h2 className="text-center mb-4">Nuestro Stack Tecnológico</h2>
            <div className="row">
                {teamMembers.map((member, index) => (
                    <div key={index} className="col-md-3 col-sm-6 mb-4">
                        <div className="card h-100 text-center shadow-sm">
                            <div className="card-body">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="mb-3"
                                    style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                                />
                                <h5 className="card-title">{member.name}</h5>
                                <p className="text-muted small">{member.role}</p>
                                <p className="card-text small">{member.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <div className="alert alert-info">
                        <h4 className="alert-heading">🚀 Características Principales</h4>
                        <hr />
                        <ul className="mb-0">
                            <li><strong>CRUD Completo:</strong> Crear, leer, actualizar y eliminar usuarios</li>
                            <li><strong>API RESTful:</strong> Endpoints bien estructurados con Flask</li>
                            <li><strong>Interfaz Moderna:</strong> UI responsive con React y Bootstrap</li>
                            <li><strong>Base de Datos NoSQL:</strong> MongoDB para almacenamiento flexible</li>
                            <li><strong>Arquitectura Desacoplada:</strong> Frontend y Backend independientes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;