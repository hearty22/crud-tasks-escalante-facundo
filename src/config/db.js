import { sequelize } from "./database.js";

// export const db = sequelize.sync({force: false, alter:false})
// .then(()=>{console.log("servidor conectado con la base de datos")})
// .catch((error)=>{console.log("Conexion fallida con la base de datos", error)});

export const db = async ()=>{ 
    try {
        await sequelize.sync({force: true, alter: false})
        console.log("servidor conectado a la base de datos");
    } catch (error) {
        console.error("error al conectar con la base de datos:", error);
    }
}; 