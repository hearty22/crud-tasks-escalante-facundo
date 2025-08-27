import { Router } from "express";
import { createUser, delUser, Showuser, Showusers, updateUser } from "../controllers/user.controllers.js";
import { createUserValidators, deleteUserValidation, getUserIDValidation, updateUserValidation } from "../middlewares/user.validators.js";
import { validator } from "../middlewares/validators/validators.js";
const userRouter = Router();

userRouter.get("/users", Showusers);
userRouter.get("/users/:id",getUserIDValidation, validator ,Showuser);
userRouter.post("/users",createUserValidators, validator ,createUser);
userRouter.put("/users/:id",updateUserValidation, validator,  updateUser);
userRouter.delete("/users/:id",deleteUserValidation, validator,  delUser)









export {userRouter};