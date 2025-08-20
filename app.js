import express from "express";
import { configDotenv } from "dotenv";
import "./src/models/task.model.js";
import "./src/models/user.model.js";
import "./src/models/person.model.js";
import "./src/models/tag.model.js";
import "./src/models/tagTask.model.js"
import "./src/config/db.js";

import {userRouter} from "./src/routes/user.routes.js";
import { taskRouter } from "./src/routes/task.routes.js";
import { db } from "./src/config/db.js";
import personRouter from "./src/routes/person.routes.js";
import tagRouter from "./src/routes/tag.routes.js";
import tagTaskRouter from "./src/routes/tagTask.routes.js";

configDotenv();
const port = process.env.SERVER_PORT;
const app = express();

app.use(express.json());

app.use("/api", personRouter)
app.use("/api", userRouter);
app.use("/api", taskRouter);
app.use("/api", tagRouter );
app.use("/api", tagTaskRouter);

app.listen(port,()=>{
    db()
    console.log(`servidor corriendo en http://localhost:${port}`)
});
