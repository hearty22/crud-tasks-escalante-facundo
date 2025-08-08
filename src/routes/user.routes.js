import { Router } from "express";
import { createUser, delUser, Showuser, Showusers, updateUser } from "../controllers/user.controllers.js";
import { Showtask, Showtasks } from "../controllers/task.controllers.js";

const router = Router();

router.get("/users", Showusers);
router.get("/users/:id", Showuser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", delUser)


router.get("/tasks", Showtasks);
router.get("/task/:id", Showtask)







export default router;