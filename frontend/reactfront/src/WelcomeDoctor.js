// WelcomeDoctor.js
import React, { useState } from 'react';
import './WelcomeDoctor.css';

const WelcomeDoctor = ({ doctorName }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleFinalizeClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al backend
    alert('Cita finalizada');
    setShowPopup(false);
  };

  return (
    <div className="welcome-container">
      <h1>Bienvenido al Dashboard del Doctor {doctorName}</h1>
      <div className="dashboard">
        <section className="appointments">
          <h2>Citas Asignadas</h2>
          <ul>
            <li>
              <span>Cita 1: Paciente X - 10:00 AM</span>
              <div className="appointment-buttons">
                <button className="view-button">Ver Detalles</button>
                <button className="cancel-button">Cancelar</button>
                <button className="reschedule-button">Reprogramar</button>
                <button className="finalize-button" onClick={handleFinalizeClick}>Finalizar Cita</button>
              </div>
            </li>
            <li>
              <span>Cita 2: Paciente Y - 11:00 AM</span>
              <div className="appointment-buttons">
                <button className="view-button">Ver Detalles</button>
                <button className="cancel-button">Cancelar</button>
                <button className="reschedule-button">Reprogramar</button>
                <button className="finalize-button" onClick={handleFinalizeClick}>Finalizar Cita</button>
              </div>
            </li>
            <li>
              <span>Cita 3: Paciente Z - 1:00 PM</span>
              <div className="appointment-buttons">
                <button className="view-button">Ver Detalles</button>
                <button className="cancel-button">Cancelar</button>
                <button className="reschedule-button">Reprogramar</button>
                <button className="finalize-button" onClick={handleFinalizeClick}>Finalizar Cita</button>
              </div>
            </li>
            {/* Más citas pueden ser añadidas aquí */}
          </ul>
        </section>
        <section className="statistics">
          <h2>Estadísticas</h2>
          <p>Total de citas hoy: 5</p>
          <p>Total de pacientes atendidos: 20</p>
          <p>Promedio de tiempo por cita: 30 minutos</p>
          {/* Más estadísticas pueden ser añadidas aquí */}
        </section>
      </div>
      <button className="back-button" onClick={() => window.location.href = '/menu'}>Volver al Menú</button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Finalizar Cita</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="historia-clinica">Historia Clínica:</label>
                <textarea id="historia-clinica" name="historia-clinica" required />
              </div>
              <div className="form-group">
                <label htmlFor="diagnostico">Diagnóstico:</label>
                <textarea id="diagnostico" name="diagnostico" required />
              </div>
              <div className="form-group">
                <label htmlFor="receta-medica">Receta Médica:</label>
                <textarea id="receta-medica" name="receta-medica" required />
              </div>
              <div className="form-group">
                <label htmlFor="procedimiento">Remite a / Autoriza a Procedimiento:</label>
                <textarea id="procedimiento" name="procedimiento" />
              </div>
              <button type="submit" className="submit-button">Finalizar</button>
              <button type="button" className="close-button" onClick={handleClosePopup}>Cerrar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomeDoctor;

