import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import { taskModel } from "./task.model.js";
import { personModel } from "./person.model.js";

export const userModel =  sequelize.define(
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
personModel.hasOne(userModel,{foreignKey:"person_id", onDelete: "CASCADE"});
userModel.belongsTo(personModel, {foreignKey: "person_id", onDelete: "CASCADE"});