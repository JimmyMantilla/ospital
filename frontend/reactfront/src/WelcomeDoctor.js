// WelcomeDoctor.js
import React from 'react';
import './WelcomeDoctor.css';

const WelcomeDoctor = ({ doctorName }) => {
  return (
    <div className="welcome-container">
      <h1>Bienvenido Doc {doctorName}</h1>
    </div>
  );
};

export default WelcomeDoctor;
