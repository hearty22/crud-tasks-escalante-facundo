import { Router } from "express";
import { createUser, delUser, Showuser, Showusers, updateUser } from "../controllers/user.controllers.js";
import { createTask, Showtask, Showtasks } from "../controllers/task.controllers.js";

const userRouter = Router();

userRouter.get("/users", Showusers);
userRouter.get("/users/:id", Showuser);
userRouter.post("/users", createUser);
userRouter.put("/users/:id", updateUser);
userRouter.delete("/users/:id", delUser)


userRouter.get("/tasks", Showtasks);
userRouter.get("/tasks/:id", Showtask)
userRouter.post("/tasks", createTask);







export {userRouter};