//codigo gpt

import Doctor from '../models/Doctor.js'

import bcrypt from 'bcrypt';

import crypto from 'crypto';

//codigo gpt

const cdoctores = (req, res)=>{
    res.send("vista para doctores");
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
    cdoctores, registrarDoctor
};