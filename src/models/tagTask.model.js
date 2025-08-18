import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import { taskModel } from "./task.model.js";
import { tagModel } from "./tag.model.js";

export const tagTaskModel = sequelize.define("tag_task",{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
},{timestamps: false})


taskModel.belongsToMany(tagModel,{through: "tag_task"})
tagModel.belongsToMany(taskModel, {through: "tag_task"})