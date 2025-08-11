import { user_model } from "../models/user.model.js";
import { Op } from "sequelize";

// ● POST /api/users: Crear un nuevo usuario.
// ● GET /api/users: Obtener todos los usuarios.
// ● GET /api/users/:id: Obtener un usuario específico por su ID.
// ● PUT /api/users/:id: Actualizar un usuario específico por su ID.
// ● DELETE /api/users/:id: Eliminar un usuario específico por su ID.

export const Showusers = async (req, res)=>{
    try {
        const users = await user_model.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: "error al obtener a los usuarios"});
    };
};
export const Showuser = async (req, res)=>{
    try {
        const user = await user_model.findByPk(req.params.id);
        if (!user){
            return res.status(404).json({message: "usuario no encontrado"})
        };

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error: "error interno al obtener al usuario"})
    }
};
export const createUser = async (req, res)=>{
    try {
        const {name, password, email} = req.body;
        if (!name || !password || !email){return res.status(400).json({message:"campos obligatorios no rellenados: name, password, email"})}
        const emailexist = await user_model.findOne({where:{email}});
        if (emailexist){return res.status(400).json({message:"el gmail ingresado ya está asociado a la pagina"})};
        const newuser = new user_model({name, password, email});
        await newuser.save();
        res.status(201).json(newuser);
    } catch (error) {
        res.status(500).json({error:"error interno al crear el usuario"});
    }
};
export const updateUser = async (req, res)=>{
    try {
        const {name, email , password} = req.body;
        if (!name && !password && !email){return res.status(400).json({message:"la solicitud debe tener rellenada al menos un campo"})};
        const user = await user_model.findByPk(req.params.id);
        if(!user){return res.status(400).json({message:"el usuario que desea actualizar no existe"})};
        const existingemail = await user_model.findOne({where:{email, id: {[Op.ne] :  req.params.id}}});
        if(existingemail){return res.status(400).json({message:" el email ingresado ya existe"})};
        await user.update({name, email, password});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error:"error interno al actualizar el usuario"})
    }
};
export const delUser = async (req, res)=>{
    try {
        const user = await user_model.findByPk(req.params.id);
        if(!user){return res.status(404).json({message:"el usuario que desea eliminar no existe"})};
        const {name, password, email} = user;

        await user.destroy();
        res.status(200).json({message:`usuario eliminado con exito: ${name}, ${password}, ${email}`});
    } catch (error) {
        res.status(500).json({error:"error interno al eliminar al usuario"})

    }
};
