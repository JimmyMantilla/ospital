// /backend/models/Paciente.js

import mongoose from "mongoose";

const pacienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    celular: {
        type: String,
        trim: true
    },
    direccion: {
        type: String,
        trim: true
    },
    token: {
        type: String,
        required: true,
        unique: true
    }
});

const Paciente = mongoose.model("Paciente", pacienteSchema);
export default Paciente;
