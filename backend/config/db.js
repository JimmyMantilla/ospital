import mongoose from "mongoose";

const conectarDB = async () => {
    try{
        const db = await mongoose.connect(process.env.MONGO_URI2 ,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        const url = `${db.connection.host}:${db.connection.port}` 
        console.log(`MongoDB funciona!! : --> url: ${url}`)

    } catch (error){
        console.error(`Error al conectar a la base de datos: ${error.message}`);
        process.exit(1);
    }
};

export default conectarDB;



