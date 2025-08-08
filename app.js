import express from "express";
import { configDotenv } from "dotenv";
import { task_model } from "./src/models/task.model.js";
import { user_model } from "./src/models/user.model.js";
import { db } from "./src/config/db.js";
import {userRouter} from "./src/routes/user.routes.js";
import { taskRouter } from "./src/routes/task.routes.js";

configDotenv();
const port = process.env.PORT_SERVER;
const app = express();

app.use(express.json());

app.get("/",(req, res)=>{
    res.send(task_model, user_model, db);
});

app.use("/api", userRouter);
app.use("/api", taskRouter);

app.listen(port,()=>{
    console.log(`servidor corriendo en http://localhost:${port}`)
});
