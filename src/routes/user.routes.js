import { Router } from "express";
import { createUser, Showuser, Showusers } from "../controllers/user.controllers.js";

const router = Router();

router.get("/users", Showusers);
router.get("/users/:id", Showuser);
router.post("/users", createUser);







export default router;