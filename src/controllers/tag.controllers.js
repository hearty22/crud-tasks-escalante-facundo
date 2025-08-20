import { tagModel } from "../models/tag.model.js";
import { taskModel } from "../models/task.model.js";

//get all
export const getTags = async (req, res)=>{
    try {
        const tags = await tagModel.findAll({
            include:{model:taskModel}
        })
        res.status(200).json(tags);
    } catch (error) {
        res.status(500).json({error:"error al obtener los tags"})
    }
};
//get by id
export const getTag = async (req, res)=>{
    try {
        const tag = await tagModel.findByPk(req.params.id, {
            include:{model: taskModel}
        });
        if(!tag){
            return res.status(404).json({message:"tag no encontrado"});
        };
        res.status(200).json(tag)
    } catch (error) {
        res.status(500).json({error:"error al obtener el tag"})
    }
};
//post
export const createTag = async (req, res)=>{
    try {
        const {tag}= req.body;
        if(!tag){return res.status(400).json({message:"campo obligatorio no rellenado: tag"})};
        const newTag = new tagModel({tag});
        await newTag.save();
        res.status(201).json(newTag);
    } catch (error) {
        res.status(500).json({error:"error al crear el tag"})
    }
};
//put
export const updateTag = async (req,res) =>{
    try {
        const {tag} = req.body;
        const tag_ = await tagModel.findByPk(req.params.id);
        if (!tag_){
            res.status(400).json({message:"el tag que desea editar no existe"});
        };
        await tag_.update({tag});
        res.status(200).json(tag_)

    } catch (error) {
        res.status(500).json({error: "error al actualizar el tag"})
    }
};

//del
export const delTag = async (req, res) =>{
    try {
        const tag_ = await tagModel.findByPk(req.params.id);
        if (!tag_) {
            return res.status(404).json({message:"el tag que desea eliminar no existe"});
        }
        const {tag} = tag_
        await tag_.destroy();
        res.status(200).json({message:`tag eliminado con exito: ${tag}`})
    } catch (error) {
        res.status(500).json({error:"error al eliminar el tag"})
    }
};