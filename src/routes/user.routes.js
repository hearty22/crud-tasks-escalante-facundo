import { Router } from "express";
import { Showuser, Showusers } from "../controllers/user.controllers.js";

const router = Router();

router.get("/users", Showusers);
router.get("/users/:id", Showuser);






export default router;