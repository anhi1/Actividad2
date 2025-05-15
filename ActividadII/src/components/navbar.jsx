import React from "react";
import { Link } from "react-router-dom"; // Importar Link de react-router-dom
import { useAuth } from "../context/AuthContext"; // Importamos el hook del contexto de autenticación

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth(); // Accedemos al estado de autenticación y a la función logout

  return (
    <div className="container">
      <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img src="logo.svg"
              className="bi"
              width="70"
              
              role="img"
              aria-label="Bootstrap"
            >
             
            </img>
          </a>
        </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 link-secondary">
              Inicio
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to="/reservations" className="nav-link px-2">
                Mis Reservas
              </Link>
            </li>
          )}
          <li>
            <Link to="/activities" className="nav-link px-2">
              Actividades
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link px-2">
              Nosotros
            </Link>
          </li>
        </ul>
        <div className="col-md-3 text-end">
          {/* Si el usuario no está autenticado, mostramos el botón de Login */}
          {!isAuthenticated ? (
            <Link to="/login" className="btn btn-outline-primary me-2">
              Login
            </Link>
          ) : (
            <>
              {/* Si el usuario está autenticado, mostramos el botón de Logout */}
              <button onClick={logout} className="btn btn-outline-danger me-2">
                Logout
              </button>
            </>
          )}
          {/* Aquí puedes agregar un botón de registro si lo deseas */}
          {!isAuthenticated && (
            <button type="button" className="btn btn-primary">
              Sign-up
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
