import React from 'react';
import './MainMenu.css';

const MainMenu = ({ onSelectOption }) => {
  return (
    <div className="main-menu">
      <h2>Menú Principal</h2>
      <div className="button-container">
        <button className="menu-button" onClick={() => onSelectOption('register')}>
          Registrarse como Doctor
        </button>
        <button className="menu-button" onClick={() => onSelectOption('login')}>
          Iniciar Sesión como Doctor
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
