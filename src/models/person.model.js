import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const personModel = sequelize.define("people",{
    firstname:{type: DataTypes.STRING, allowNull: false},
    lastname:{type: DataTypes.STRING, allowNull: false}
}, { createdAt: false, updatedAt: false, paranoid: true})