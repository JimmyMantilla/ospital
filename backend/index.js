import express from "express";

import conectarDB from "./config/db.js";

import dotenv from 'dotenv';

import doctorRoutes from './routes/doctorRoutes.js'

import pacienteRoutes from './routes/pacienteRoutes.js'; 

console.log("probando el funcionamiento de NODE JS");
const app = express();
dotenv.config();
conectarDB();
//codigo gpt 
app.use(express.json());
//codigo gpt


app.use("/doctores", doctorRoutes);
app.use("/pacientes", pacienteRoutes);
const PORT = process.env.PORT || 4000;
app.listen(3000, () =>{
    console.log("servidor funcionando en el puerto 3s000");
});