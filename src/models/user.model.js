import { sequelize } from "../config/databasejs";
import { DataTypes } from "sequelize";

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
    }
)