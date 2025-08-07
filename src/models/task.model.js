import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";


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

