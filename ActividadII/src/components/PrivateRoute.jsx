import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Accedemos al contexto de autenticación

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Verificamos si el usuario está autenticado

  // Si el usuario no está autenticado, lo redirigimos a login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Si está autenticado, mostramos el contenido hijo
  return children;
};

export default PrivateRoute;
