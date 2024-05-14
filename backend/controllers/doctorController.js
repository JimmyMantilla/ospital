//codigo gpt

import Doctor from '../models/Doctor.js'

import bcrypt from 'bcrypt';

import crypto from 'crypto';

//codigo gpt

const cdoctores = (req, res)=>{
    res.send("vista para doctores");
};

const loginDoctor = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Verifica si el doctor existe en la base de datos
      const doctor = await Doctor.findOne({ email });
  
      if (!doctor) {
        return res.status(401).json({ error: 'Correo electrónico o contraseña incorrectos' });
      }
  
      // Verifica si la contraseña es correcta
      const passwordMatch = await bcrypt.compare(password, doctor.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Correo electrónico o contraseña incorrectos' });
      }
  
      // Si las credenciales son válidas, devuelve un token de sesión u otra información relevante
      return res.status(200).json({ success: true, message: 'Inicio de sesión exitoso' });
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return res.status(500).json({ error: 'Error al iniciar sesión' });
    }
  };

const registrarDoctor = async (req, res) => {
    const { nombre, password, email, Celular, confirmado } = req.body;

    try {
        // Verificar si el doctor ya está registrado con el correo electrónico proporcionado
        const doctorExistente = await Doctor.findOne({ email });

        if (doctorExistente) {
            // Si el doctor ya existe, enviar un mensaje de error
            return res.status(400).json({ error: 'El doctor ya está registrado en la base de datos' });
        }

        // Generar un token aleatorio único
        const token = crypto.randomBytes(16).toString('hex');

        // Hashear la contraseña antes de compararla y guardarla en la base de datos
        const hashedPassword = await bcrypt.hash(password, 10);

        // Comparar la contraseña hasheada con la contraseña proporcionada
        const contraseñasCoinciden = await bcrypt.compare(password, hashedPassword);

        if (!contraseñasCoinciden) {
            // Si las contraseñas no coinciden, enviar un mensaje de error
            return res.status(400).json({ error: 'La contraseña proporcionada no es válida' });
        }

        // Si las contraseñas coinciden y el doctor no existe, crear y guardar el nuevo doctor
        const nuevoDoctor = new Doctor({
            nombre,
            password: hashedPassword, // Usamos la contraseña hasheada
            email,
            Celular,
            token,
            confirmado
        });

        await nuevoDoctor.save();

        // Enviar respuesta de éxito con campo adicional indicando si las contraseñas coinciden
        const respuesta = {
            mensaje: 'Doctor registrado exitosamente',
            contraseñasCoinciden: contraseñasCoinciden
        };
        res.status(201).json(respuesta);
    } catch (error) {
        // Manejar errores
        console.error('Error al registrar doctor:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

//codigo gpt


export{
    cdoctores, registrarDoctor, loginDoctor
};