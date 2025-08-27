import { Router } from "express";
import { createPerson, delPerson, getPeople, getPerson, updatePerson } from "../controllers/person.controllers.js";
import { createPersonValidation, deletePersonValidation, getPersonIDValidation, updatePersonValidation } from "../middlewares/person.validators.js";
import { validator } from "../middlewares/validators/validators.js";

const personRouter = Router();

personRouter.get("/people",  getPeople);
personRouter.get("/people/:id", getPersonIDValidation, validator, getPerson);
personRouter.post("/people" , createPersonValidation, validator, createPerson);
personRouter.put("/people/:id",updatePersonValidation,validator , updatePerson);
personRouter.delete("/people/:id",deletePersonValidation, validator,  delPerson);


export default personRouter;
