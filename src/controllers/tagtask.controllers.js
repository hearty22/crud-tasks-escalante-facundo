import { tagModel } from "../models/tag.model.js";
import { tagTaskModel } from "../models/tagTask.model.js";
import { taskModel } from "../models/task.model.js";

//get all
export const getRelaciones = async (req,res)=>{
    try {
        const relaciones = await tagTaskModel.findAll({
            include:[
                {model:tagModel},
                {model:taskModel}
            ]
        });
        res.status(200).json(relaciones);
    } catch (error) {
        res.status(500).json({error:"error al obtener las relaciones"})
    }
};
export const creatRel = async (req, res) => {
    try {
        const { task_id, tag_id } = req.body;
        if (!task_id || !tag_id){
            return res.status(400).json({ error: "Faltan datos obligatorios: task_id, tag_id" });
        }
        const tag = tagModel.findByPk(tag_id);
        if (!tag){
            return res.status(404).json({ error: "No se ha encontrado la etiqueta." });
        }
        const task = taskModel.findByPk(task_id);
        if (!task){
            return res.status(404).json({ error: "No se ha encontrado la tarea" });
        }
        const taskTag = new tagTaskModel({task_id, tag_id});;
        res.status(201).json(taskTag);
    } catch (error) {

        res.status(500).json({message:"error al crear la relacion"})
    }
};

