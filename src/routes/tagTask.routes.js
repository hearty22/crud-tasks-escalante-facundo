import { Router } from "express";
import { creatRel, getRelaciones } from "../controllers/tagtask.controllers.js";

const tagTaskRouter = Router();

tagTaskRouter.get("/rel", getRelaciones);
tagTaskRouter.post("/rel", creatRel);


export default tagTaskRouter;