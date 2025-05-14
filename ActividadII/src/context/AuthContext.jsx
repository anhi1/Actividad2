import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = (email, password) => {
    // Simula una autenticación con email y password
    if (email === 'user@gmail.com' && password === '123456') {
      setIsAuthenticated(true);
      navigate('/activities'); // Redirige a actividades
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/login'); // Redirige al login
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
