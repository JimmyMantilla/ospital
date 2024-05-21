import React, { useState } from 'react';
import './DoctorLogin.css';
import { loginDoctor } from './api'; // Importa la función para iniciar sesión
import { FaArrowLeft } from 'react-icons/fa';
import CustomAlert from './CustomAlert'; // Importa el componente de alerta personalizado

const DoctorLogin = ({onLoginSuccess, onBackToMenu }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginDoctor(email, password); // Llama a la función de inicio de sesión
      if (response.success) {
        onLoginSuccess(response.name); // Llama a la función de éxito de inicio de sesión con el nombre del doctor
      } else {
        setLoginMessage('Inicio de sesión fallido');
        setShowAlert(true);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setLoginMessage('Error al iniciar sesión');
      setShowAlert(true);
    }
  };

  const handleCloseAlert = () => {

    setShowAlert(false);

  };

  return (
    <div className="login-container">
      <button onClick={onBackToMenu} className="back-button">
        <FaArrowLeft /> Volver al Menú
      </button>
      <div className="login-form">
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
          <button type="submit" className="login-button">Iniciar Sesión</button>
        </form>
      </div>
      {showAlert && <CustomAlert message={loginMessage} onClose={handleCloseAlert} />}
    </div>
  );
};

export default DoctorLogin;
