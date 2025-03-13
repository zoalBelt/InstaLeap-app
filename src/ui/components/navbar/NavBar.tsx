import { Link } from "react-router-dom";
import "./NavBar.css"; // Importamos los estilos locales

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link className="brand" to="/">Gestión de Usuarios</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/get-user">Buscar Usuario</Link></li>
          <li><Link to="/create-user">Crear Usuario</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
