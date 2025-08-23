import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import { userModel } from "./user.model.js";


export const taskModel = sequelize.define("task",
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
        is_complete:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },{createdAt:false, updatedAt:false}
);

userModel.hasMany(taskModel, {foreignKey: "user_id", onDelete:"CASCADE"});
taskModel.belongsTo(userModel, {foreignKey: "user_id"});
