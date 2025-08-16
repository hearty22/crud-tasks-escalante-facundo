import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import { user_model } from "./user.model.js";


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
    },{createdAt:false, updatedAt:false}
);

user_model.hasMany(task_model, {foreignKey: "user_id"});
task_model.belongsTo(user_model, {foreignKey: "user_id"});
