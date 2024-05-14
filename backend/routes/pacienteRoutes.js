// /backend/routes/pacienteRoutes.js

import express from 'express';
import { registrarPaciente } from '../controllers/pacienteController.js';

const router = express.Router();

// Ruta para registrar un nuevo paciente
router.post('/registrar', registrarPaciente);

export default router;
