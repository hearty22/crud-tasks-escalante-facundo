import {Router} from "express";
import { createTask, delTask, Showtask, Showtasks, updateTask } from "../controllers/task.controllers.js";

const taskRouter = Router();

taskRouter.get("/tasks", Showtasks);
taskRouter.get("/tasks:id", Showtask);
taskRouter.post("/tasks", createTask);
taskRouter.put("/tasks/:id", updateTask);
taskRouter.delete("/tasks/:id", delTask);



export {taskRouter};