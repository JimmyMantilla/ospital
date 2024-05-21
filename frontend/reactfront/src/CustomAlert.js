// CustomAlert.js
import React from 'react';
import './CustomAlert.css';

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <div className="alert-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <div className="alert-icon">&#9888;</div>
        <div className="alert-message">{message}</div>
      </div>
    </div>
  );
};

export default CustomAlert;
