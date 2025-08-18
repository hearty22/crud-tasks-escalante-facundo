import { personModel } from "../models/person.model.js";
import { Op } from "sequelize";
import { userModel } from "../models/user.model.js";
import { taskModel } from "../models/task.model.js";

//GET
export const getPeople = async (req, res)=>{
    try {
        const people = await personModel.findAll({include:{model: userModel, attributes:{exclude: "person_id"},
        include:{model: taskModel}
        }});
        res.status(200).json(people);
    } catch (error) {
        res.status(500).json({error:"error al obtener los registros de personas"})
    }
};
//GET
export const getPerson = async (req, res)=>{
    try {
        const person = await personModel.findByPk(req.params.id, {
            include:{model: userModel,
                attributes:{exclude: "person_id"},
                include:{model: taskModel}
            }
        })
        if(!person){return res.status(404).json({message:"la persona que desea buscar no existe"});}
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({error:"error al obtener los registros de la persona"})

    }
};

//POST
export const createPerson = async (req, res)=>{
    try {
        const { firstname, lastname, user_id} = req.body
        if(!firstname||!lastname||!user_id){return res.status(400).json({message:"campos obligatorios no rellenados: firstname, lastname, user_id"})
        };
        if(typeof user_id !== "number"){return res.status(400).json({message: "el campo user_id debe de ser number o entero"})};
        const userExist = await userModel.findByPk(user_id);
        if(!userExist){return res.status(400).json({message:"la persona debe de estar asociada a un usuario y dicho usuario debe de existir"})}
        const newPerson = new personModel({firstname, lastname, user_id});
        await newPerson.save();
        res.status(200).json(newPerson);
    } catch (error) {
        res.status(500).json({error:"error al crear la persona"}
        )
    }
}
//PUT
//DEL