import { Router } from "express";
import { createTag, delTag, getTag, getTags, updateTag } from "../controllers/tag.controllers.js";
import { validator } from "../middlewares/validators/validators.js";
import { createTagValidator, deleteTagValidator, findTagByIdValidator, updateTagValidator } from "../middlewares/tag.validators.js";
const tagRouter = Router();

tagRouter.get("/tags", getTags);
tagRouter.get("/tags/:id",findTagByIdValidator, validator ,getTag);
tagRouter.post("/tags",createTagValidator, validator, createTag);
tagRouter.put("/tags/:id",updateTagValidator, validator ,updateTag);
tagRouter.delete("/tags/:id",deleteTagValidator, validator,delTag );

export default tagRouter;