import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Almacena los datos del usuario
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      // Realiza una solicitud al backend para autenticar al usuario
      const response = await fetch(
        "http://127.0.0.1:3658/m1/914149-896526-default/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setIsAuthenticated(true);
        setUser(data.user); // Almacena los datos del usuario devueltos por el backend
        navigate("/activities"); // Redirige a actividades
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error en la solicitud de login:", error);
      alert(
        "Hubo un problema al iniciar sesión. Inténtalo de nuevo más tarde."
      );
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null); // Limpia los datos del usuario
    navigate("/login"); // Redirige al login
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
