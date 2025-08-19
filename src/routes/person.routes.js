import { Router } from "express";
import { createPerson, delPerson, getPeople, getPerson, updatePerson } from "../controllers/person.controllers.js";

const personRouter = Router();

personRouter.get("/people", getPeople);
personRouter.get("/people/:id", getPerson);
personRouter.post("/people", createPerson);
personRouter.put("/people/:id", updatePerson);
personRouter.delete("/people/:id", delPerson);


export default personRouter;
