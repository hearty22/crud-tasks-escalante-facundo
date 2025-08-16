import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import { task_model } from "./task.model.js";

export const user_model =  sequelize.define(
    "user",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull:false
        },
        email:{
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING(100),
            allowNull: false
        }

    },{createdAt: false, updatedAt: false}
);
