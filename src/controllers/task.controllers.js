import { task_model } from "../models/task.model.js";
import { user_model } from "../models/user.model.js";


// ● POST /api/users: Crear un nuevo usuario.
// ● GET /api/users: Obtener todos los usuarios.
// ● GET /api/users/:id: Obtener un usuario específico por su ID.
// ● PUT /api/users/:id: Actualizar un usuario específico por su ID.
// ● DELETE /api/users/:id: Eliminar un usuario específico por su ID.

export const Showtasks = async (req, res)=>{
    try {
        const tasks = await task_model.findAll({
            attributes: {exclude: "user_id"},
            include: {model: user_model, 
            attributes: {exclude:["password", "email"]}}
    })
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({error: "error al obtener las tareas"});
    };

};






export const Showtask = async (req, res)=>{
    try {
        const task = await task_model.findByPk(req.params.id,
            {
                attributes:{exclude: ["user_id"]},
                include:{model: user_model, 
                    attributes: {exclude: ["password", "email"]}
                }
            }
        );
        if (!task){
            return res.status(404).json({message: "la tarea no existe"})
        };

        res.status(200).json(task)

    } catch (error) {
        res.status(500).json({error: "error interno al obtener al usuario"})
    }
};



//post task
export const createTask = async (req, res)=>{
    try {



        const {title, description, isComplete, user_id} = req.body;
       
        if (!title || !description || !user_id){return res.status(400).json({message:"campos obligatorios no rellenados: title, description, isComplete, user_id"})}
        if(typeof isComplete !== "boolean"){return res.status(400).json({message:"el campo isComplete debe de ser un booleano"})}
        if(typeof user_id !== "number"){return res.status(400).json({message: "el campo user_id debe de ser entero o number"})}

        const user = await user_model.findByPk(user_id);
        if(!user){res.status(400).json({message:"el usuario que desea asignarle la tarea no existe"})}
        
        const taskexist = await task_model.findOne({where:{title}});
        if (taskexist){return res.status(400).json({message:"La tarea que desea crear ya existe"})};
        const newtask = new task_model({title, description, isComplete, user_id});
        await newtask.save();
        res.status(201).json(newtask);
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"error interno al crear la tarea"});
    }
};


export const updateTask = async (req, res)=>{
    try {
        const {title, description , isComplete} = req.body;

        if (!title && !description ){return res.status(400).json({message:"la solicitud debe tener rellenada al menos un campo"})};
        const task = await task_model.findByPk(req.params.id);
        if(!task){return res.status(400).json({message:"el usuario que desea actualizar no existe"})};
        if(typeof isComplete !== "boolean"){return res.status(400).json({message:"el campo isComplete debe de ser un booleano"})}

        const existingtitle = await task_model.findOne({where:{title, id: {[Op.ne]:req.params.id}}});
        if(existingtitle){return res.status(400).json({message:"Ya existe una tarea con el mismo titulo"})};
        await task.update({title, description, isComplete});
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({error:"error interno al actualizar la tarea"})
    }
};
export const delTask = async (req, res)=>{
    try {
        const task = await task_model.findByPk(req.params.id);
        if(!task){return res.status(404).json({message:"la tarea que desea eliminar no existe"})};
        const {title, description} = task;

        await task.destroy();
        res.status(200).json({message:`tarea eliminada con exito: ${title}, ${description}`});
    } catch (error) {
        res.status(500).json({error:"error interno al eliminar al la tarea"})

    }
};
