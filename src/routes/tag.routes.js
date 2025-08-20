import { Router } from "express";
import { createTag, delTag, getTag, getTags, updateTag } from "../controllers/tag.controllers.js";
import { delPerson } from "../controllers/person.controllers.js";

const tagRouter = Router();

tagRouter.get("/tags", getTags);
tagRouter.get("/tags/:id", getTag);
tagRouter.post("/tags", createTag);
tagRouter.put("/tags/:id", updateTag);
tagRouter.delete("/tags/:id",delTag );

export default tagRouter;