import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";


// id (INTEGER, PRIMARY KEY, AUTO_INCREMENT)
// ● title (STRING(100),UNIQUE, NOT NULL)
// ● description (STRING(100), NOT NULL)
// ● isComplete (BOOLEAN, DEFAULT FALSE)

export const task_model = sequelize.define("task",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false
        },
        description:{
            type:DataTypes.STRING(100),
            allowNull: false
        },
        isComplete:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }
);

