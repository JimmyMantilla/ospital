// api.js

const loginDoctor = async (email, password) => {
    try {
      const response = await fetch('/doctores/login', { // Ruta del backend para el inicio de sesión
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Error al iniciar sesión'); // Lanza un error si la solicitud no es exitosa
      }
  
      const data = await response.json();
      return data; // Devuelve los datos de la respuesta del servidor
    } catch (error) {
      throw new Error('Error al iniciar sesión: ' + error.message); // Captura y relanza el error
    }
  };

// Función para registrar un nuevo doctor
const registerDoctor = async (nombre, email, password, celular) => {
    try {
      const response = await fetch('/doctores/registrar', { // Ruta del backend para el registro de doctores
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, password, celular }), // Datos del nuevo doctor en formato JSON
      });
  
      if (!response.ok) {
        throw new Error('Error al registrar el doctor'); // Lanza un error si la solicitud no es exitosa
      }
  
      const data = await response.json();
      return data; // Devuelve los datos de la respuesta del servidor
    } catch (error) {
      throw new Error('Error al registrar el doctor: ' + error.message); // Captura y relanza el error
    }
  };
  
  export { loginDoctor, registerDoctor };
  
  