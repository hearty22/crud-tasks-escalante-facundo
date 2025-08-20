import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import { taskModel } from "./task.model.js";
import { tagModel } from "./tag.model.js";

export const tagTaskModel = sequelize.define("tag_task",{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
},{timestamps: false})


taskModel.belongsToMany(tagModel,{through: "tag_task", foreignKey:"task_id"})
tagModel.belongsToMany(taskModel, {through: "tag_task", foreignKey:"tag_id"})

tagTaskModel.belongsTo(taskModel, {foreignKey: "task_id"});
tagTaskModel.belongsTo(tagModel, {foreignKey: "tag_id"});
