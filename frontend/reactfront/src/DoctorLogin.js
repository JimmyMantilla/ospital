// DoctorLogin.js

import React, { useState } from 'react';
import { loginDoctor } from './api'; // Importa la función para iniciar sesión

const DoctorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginDoctor(email, password); // Llama a la función de inicio de sesión
      if (response.success) {
        setLoginMessage('Inicio de sesión exitoso');
      } else {
        setLoginMessage('Inicio de sesión fallido');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setLoginMessage('Error al iniciar sesión');
    }
  };

  return (
    <div className="doctor-login">
      <h2>Iniciar Sesión como Doctor</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>{loginMessage}</p>
    </div>
  );
};

export default DoctorLogin;
