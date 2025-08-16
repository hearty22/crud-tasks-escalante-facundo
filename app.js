import express from "express";
import { configDotenv } from "dotenv";
import "./src/models/task.model.js";
import "./src/models/user.model.js";
import "./src/config/db.js";
import {userRouter} from "./src/routes/user.routes.js";
import { taskRouter } from "./src/routes/task.routes.js";

import { db } from "./src/config/db.js";


configDotenv();
const port = process.env.PORT_SERVER;
const app = express();

app.use(express.json());


app.use("/api", userRouter);
app.use("/api", taskRouter);

app.listen(port,()=>{

    db()

    console.log(`servidor corriendo en http://localhost:${port}`)
});
