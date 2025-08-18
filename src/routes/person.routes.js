import { Router } from "express";
import { createPerson, getPeople, getPerson } from "../controllers/person.controllers.js";

const personRouter = Router();

personRouter.get("/people", getPeople);
personRouter.get("/people/:id", getPerson);
personRouter.post("/people", createPerson);




export default personRouter;
