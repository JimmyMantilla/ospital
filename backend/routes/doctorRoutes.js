import express from 'express'

const router = express.Router();
import { cdoctores, registrarDoctor, loginDoctor } from '../controllers/doctorController.js';




router.get('/', cdoctores);

router.get("/logindoctores", (req, res)=>{
    res.send("vista para el login de los doctores")
})

router.get("/perfildoctores", (req, res)=>{
    res.status(201).json({ mensaje: 'Estamos en perfil doctores'});
})

//codigo gpt 
router.post('/registrar', registrarDoctor);
//codigo gpt 
// Ruta para iniciar sesión de un doctor
router.post('/login', loginDoctor);

export default router;
