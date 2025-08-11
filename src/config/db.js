import { sequelize } from "./database.js";

// export const db = sequelize.sync({force: false, alter:true})
// .then(()=>{console.log("servidor conectado con la base de datos")})
// .catch((error)=>{console.log("Conexion fallida con la base de datos", error)});


export const db_conect = async ()=>{
    try {
        await sequelize.sync({force:false, alter: true});
        console.log("conectado con la base de datos correctamente");
    } catch (error) {
        console.log("conexion fallida con la base de datos:", error)
    }
};
