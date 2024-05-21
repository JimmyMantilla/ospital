import React, { useState } from 'react';
import './DoctorRegistration.css';
import { registerDoctor } from './api';
import { FaArrowLeft } from 'react-icons/fa';

const DoctorRegistration = ({ onBackToMenu }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [celular, setCelular] = useState('');
  const [registroMessage, setRegistroMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerDoctor(nombre, email, password, celular);
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
    <div className="registration-container">
      <button onClick={onBackToMenu} className="back-button">
        <FaArrowLeft /> Volver al Menú
      </button>
      <div className="registration-form">
        <h2>Registro de Doctor</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
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
            <label htmlFor="cellphone">Celular:</label>
            <input
              type="text"
              id="cellphone"
              name="cellphone"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            />
          </div>
          <button type="submit" className="register-button">
            Registrarse
          </button>
        </form>
        <p>{registroMessage}</p>
      </div>
    </div>
  );
};

export default DoctorRegistration;
