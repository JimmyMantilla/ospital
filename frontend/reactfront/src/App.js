// App.js
import React, { useState } from 'react';
import MainMenu from './MainMenu';
import DoctorRegistration from './DoctorRegistration';
import DoctorLogin from './DoctorLogin';
import WelcomeDoctor from './WelcomeDoctor';
import './App.css';

const App = () => {
  const [currentView, setCurrentView] = useState('menu');
  const [doctorName, setDoctorName] = useState('');

  const handleSelectOption = (option) => {
    setCurrentView(option);
  };

  const handleBackToMenu = () => {
    setCurrentView('menu');
  };

  const handleLoginSuccess = (name) => {
    setDoctorName(name);
    setCurrentView('welcome');
  };

  return (
    <div>
 {currentView === 'menu' && <MainMenu onSelectOption={handleSelectOption} />}
      {currentView === 'register' && <DoctorRegistration onBackToMenu={handleBackToMenu} />}
      {currentView === 'login' && <DoctorLogin onLoginSuccess={handleLoginSuccess} onBackToMenu={handleBackToMenu} />}
      {currentView === 'welcome' && <WelcomeDoctor doctorName={doctorName} />}
    </div>
  );
};

export default App;



