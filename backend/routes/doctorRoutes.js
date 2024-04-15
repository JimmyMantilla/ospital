import express from 'express'

const router = express.Router();
import { cdoctores} from '../controllers/doctorController.js';
//codigo gpt 
import { registrarDoctor } from '../controllers/doctorController.js';
//codigo gpt


router.get('/', cdoctores);

router.get("/logindoctores", (req, res)=>{
    res.send("vista para el login de los doctores")
})

//codigo gpt 
router.post('/registrar', registrarDoctor);
//codigo gpt 

export default router;
