import React from 'react';

const MainMenu = ({ onSelectOption }) => {
  return (
    <div className="main-menu">
      <h2>Menú Principal</h2>
      <button onClick={() => onSelectOption('register')}>Registrarse como Doctor</button>
      <button onClick={() => onSelectOption('login')}>Iniciar Sesión como Doctor</button>
    </div>
  );
};

export default MainMenu;
