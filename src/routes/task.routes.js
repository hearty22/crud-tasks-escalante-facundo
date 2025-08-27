import {Router} from "express";
import { createTask, delTask, Showtask, Showtasks, updateTask } from "../controllers/task.controllers.js";
import { validator } from "../middlewares/validators/validators.js";
import { createTaskValidation, deleteTaskValidation, getTaskIDValidation, updateTaskValidation } from "../middlewares/task.validators.js";
const taskRouter = Router();

taskRouter.get("/tasks", Showtasks);
taskRouter.get("/tasks:id", getTaskIDValidation, validator ,Showtask);
taskRouter.post("/tasks",createTaskValidation, validator ,createTask);
taskRouter.put("/tasks/:id",updateTaskValidation, validator ,updateTask);
taskRouter.delete("/tasks/:id",deleteTaskValidation, validator ,delTask);



export {taskRouter};