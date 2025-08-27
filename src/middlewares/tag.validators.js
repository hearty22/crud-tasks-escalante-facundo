import { body, param } from "express-validator";
import { tagModel } from "../models/tag.model.js";
export const createTagValidator = [
    body("tag")
    .notEmpty()
    .withMessage("El campo tag no puede ser vacío.")
    .isString()
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre debe ser un string de mínimo 2 caracteres.")
    .custom(async (value) => {
        const isNameUnique = await tagModel.findOne({ where: { tag: value } });
        if (isNameUnique){
            throw new Error("El nombre de la etiqueta ya existe.")
        }
    }),
  
];
export const updateTagValidator = [
    body("tag")
    .notEmpty()
    .withMessage("El campo tag no puede ser vacío.")
    .isString()
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre debe ser un string de mínimo 2 caracteres.")
    
];
export const findTagByIdValidator = [
    param("id")
    .isInt({ min: 1 })
    .withMessage("El id debe ser un número mayor o igual a 1.")
    .custom(async (value) => {
        const tag = await tagModel.findByPk(value);
        if(!tag){
            throw new Error("La etiqueta no existe en la base de datos.")
        }
    })
];
export const deleteTagValidator = [
    param("id")
    .isInt({ min: 1 })
    .withMessage("El id debe ser un número mayor o igual a 1.")
    .custom(async (value) => {
        const tag = await tagModel.findByPk(value);
        if(!tag){
            throw new Error("La etiqueta no existe en la base de datos.")
        }
    })
];