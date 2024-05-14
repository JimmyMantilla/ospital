// App.js

import React, { useState } from 'react';
import MainMenu from './MainMenu';
import DoctorRegistration from './DoctorRegistration';
import DoctorLogin from './DoctorLogin';
import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      {selectedOption === null ? (
        <MainMenu onSelectOption={handleSelectOption} />
      ) : selectedOption === 'register' ? (
        <DoctorRegistration />
      ) : (
        <DoctorLogin />
      )}
    </div>
  );
}

export default App;


