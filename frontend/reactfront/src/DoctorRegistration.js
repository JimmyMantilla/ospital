// DoctorRegistration.js

import React, { useState } from 'react';
import { registerDoctor } from './api'; // Importa la función para registrar un doctor

const DoctorRegistration = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [celular, setCelular] = useState('');
  const [registroMessage, setRegistroMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await registerDoctor(nombre, email, password, celular); // Llama a la función de registro
      if (response.success) {
        setRegistroMessage('Registro exitoso');
      } else {
        setRegistroMessage('Error al registrar');
      }
    } catch (error) {
      console.error('Error al registrar:', error);
      setRegistroMessage('Error al registrar');
    }
  };

  return (
    <div className="doctor-registration">
      <h2>Registro de Doctor</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="celular">Celular:</label>
          <input
            type="text"
            id="celular"
            name="celular"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <p>{registroMessage}</p>
    </div>
  );
};

export default DoctorRegistration;


