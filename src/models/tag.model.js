import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const tagModel = sequelize.define("tags",{
    tag:{type: DataTypes.STRING, allowNull: false}
}, {timestamps: false})