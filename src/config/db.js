import { sequelize } from "./database.js";

<<<<<<< .merge_file_sOhQB6
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
=======
// export const db = sequelize.sync({force: false, alter:false})
// .then(()=>{console.log("servidor conectado con la base de datos")})
// .catch((error)=>{console.log("Conexion fallida con la base de datos", error)});

export const db = async ()=>{ 
    try {
        await sequelize.sync({force: false, alter: false})
        console.log("servidor conectado a la base de datos");
    } catch (error) {
        console.error("error al conectar con la base de datos:", error);
    }
}; 
>>>>>>> .merge_file_uqxgj1
