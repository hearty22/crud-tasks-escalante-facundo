import { body, param } from "express-validator";
import { Op } from "sequelize";
import { personModel } from "../models/person.model.js";

export const createPersonValidation = [
  body("firstname")
    .trim()
    .notEmpty()
    .withMessage("El campo firstname debe ser obligatorio")
    .isString()
    .isLength({ min: 2, max: 15 })
    .withMessage("El first_name debe ser de entre 2 y 15 caracteres"),
  body("lastname")
    .trim()
    .notEmpty()
    .withMessage("El campo lastname debe ser obligatorio")
    .isString()
    .isLength({ min: 2, max: 15 })
    .withMessage(
      "El campo last_name debe ser de entre 2 a 15 caracteres"
    ),
  body("id")
    .notEmpty()
    .withMessage("El campo id debe ser obligatorio")
    .isInt({ min: 1 })
    .withMessage("El campo id debe ser un numero")
    .custom(async (value) => {
      const accountExists = await personModel.findOne({
        where: { id: value },
      });
      if (accountExists) {
        throw new Error("Esa persona ya existe");
      }
      return true;
    }),
];

export const updatePersonValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un entero")
    .custom(async (value) => {
      const account = await personModel.findByPk(value);
      if (!account) {
        throw new Error("La cuenta no existe");
      }
    })
    ,
  body("firstname")
    .trim()
    .optional()
    .isString()
    .withMessage("El campo firstname debe ser una cadena de caracteres")
    .isLength({ min: 2, max: 15 })
    .withMessage("El firstname debe ser entre 2 y 15 caracteres"),
  body("lastname")
    .trim()
    .optional()
    .isString()
    .isLength({ min: 2, max: 15 })
    .withMessage(
      "El campo lastname debe ser obligatorio y de 2 a 15 caracteres de longitud"
    )
];

export const getPersonIDValidation = [
  param("id")
    .exists()
    .isInt({ min: 1 })
    .withMessage("El campo ID debe ser un numero")
    .custom(async (value) => {
      const account = await personModel.findByPk(value);
      if (!account) {
        throw new Error("La cuenta no existe");
      }
    }),
];

export const deletePersonValidation = [
  param("id")
    .exists()
    .isInt({ min: 1 })
    .withMessage("El campo ID debe ser un numero")
    .custom(async (value) => {
      const account = await personModel.findByPk(value);
      if (!account) {
        throw new Error("La persona no existe");
      }
    }),
];