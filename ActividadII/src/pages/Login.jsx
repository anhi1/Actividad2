import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const success = await login(email, password);
      if (success) {
        navigate('/activities');
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (err) {
      console.error('Error en el login:', err);
      setError('Hubo un problema al iniciar sesión.');
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center bg-light">
      <div className="row w-100">
        {/* Lado izquierdo: Imagen */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center ">
          <img
            src="jovenes.jpg" // Asegúrate de tener esta imagen
            alt="Login visual"
            className="img-fluid"
            style={{ maxHeight: '100vh', objectFit: 'cover', width: '100%' }}
          />
        </div>

        {/* Lado derecho: Formulario */}
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <div className="card p-4 shadow w-100" style={{ maxWidth: '400px' }}>
            {/* GIF Animado arriba */}
            <div className="text-center mb-4">
              <img
                src="viajero.gif" // Pon tu GIF en public/animations/
                alt="Animación viajero"
                style={{ height: '110px' }}
              />
            </div>

            <h2 className="mb-4 text-center">Iniciar Sesión</h2>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Ingresa tu correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">Entrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
