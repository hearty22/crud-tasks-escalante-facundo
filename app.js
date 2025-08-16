import express from "express";
import { configDotenv } from "dotenv";
import "./src/models/task.model.js";
import "./src/models/user.model.js";
import "./src/config/db.js";
import {userRouter} from "./src/routes/user.routes.js";
import { taskRouter } from "./src/routes/task.routes.js";
<<<<<<< .merge_file_UpqnM6
import { db_conect } from "./src/config/db.js";
=======
import { db } from "./src/config/db.js";
>>>>>>> .merge_file_idjFgD

configDotenv();
const port = process.env.PORT_SERVER;
const app = express();

app.use(express.json());

<<<<<<< .merge_file_UpqnM6

=======
>>>>>>> .merge_file_idjFgD

app.use("/api", userRouter);
app.use("/api", taskRouter);

app.listen(port,()=>{
<<<<<<< .merge_file_UpqnM6
    db_conect();
=======
    db()
>>>>>>> .merge_file_idjFgD
    console.log(`servidor corriendo en http://localhost:${port}`)
});
