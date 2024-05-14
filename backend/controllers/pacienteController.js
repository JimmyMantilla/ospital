
import Paciente from '../models/Paciente.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const registrarPaciente = async (req, res) => {
    const { nombre, email, celular, direccion } = req.body;

    try {
        // Verificar si el paciente ya está registrado con el correo electrónico proporcionado
        const pacienteExistente = await Paciente.findOne({ email });

        if (pacienteExistente) {
            // Si el paciente ya existe, enviar un mensaje de error
            return res.status(400).json({ error: 'El paciente ya está registrado en la base de datos' });
        }

        // Generar un token aleatorio único para el paciente
        const token = crypto.randomBytes(16).toString('hex');

        // Crear un nuevo paciente con los datos proporcionados y el token aleatorio
        const nuevoPaciente = new Paciente({
            nombre,
            email,
            celular,
            direccion,
            token
        });

        // Guardar el nuevo paciente en la base de datos
        await nuevoPaciente.save();

        // Enviar respuesta de éxito
        res.status(201).json({ mensaje: 'Paciente registrado exitosamente' });
    } catch (error) {
        // Manejar errores
        console.error('Error al registrar paciente:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export { registrarPaciente };
