//codigo gpt

import Doctor from '../models/Doctor.js'

//codigo gpt

const cdoctores = (req, res)=>{
    res.send("vista para doctores");
};

//codigo gpt
const registrarDoctor = async (req, res) => {
    try {
        const { nombre, password, email, Celular, token, confirmado } = req.body;

        // Crear una nueva instancia de Doctor con los datos recibidos
        const nuevoDoctor = new Doctor({
            nombre,
            password,
            email,
            Celular,
            token,
            confirmado
        });

        // Guardar el nuevo doctor en la base de datos
        const doctorGuardado = await nuevoDoctor.save();

        // Responder con un mensaje de éxito y los datos del doctor guardado
        res.status(201).json({ mensaje: 'Doctor registrado correctamente', doctor: doctorGuardado });
    } catch (error) {
        // Manejar cualquier error que ocurra durante el proceso de registro
        console.error('Error al registrar doctor:', error.message);
        res.status(500).json({ mensaje: 'Error interno al registrar doctor' });
    }
};


//codigo gpt


export{
    cdoctores, registrarDoctor
}