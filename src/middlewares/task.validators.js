import { body, param } from "express-validator";
import { taskModel } from "../models/task.model.js";
import { Op } from "sequelize";

export const createTaskValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("El campo title debe ser obligatorio")
    .isString()
    .isLength({ min: 2, max: 100 })
    .withMessage("El campo title debe tener entre 2 y 100 caracteres")
    .custom(async (value) => {
      const taskExists = await taskModel.findOne({
        where: { title: value },
      });
      if (taskExists) {
        throw new Error("Esa tarea ya existe");
      }
      return true;
    }),
  body("description")
    .trim()
    .notEmpty()
    .withMessage("El campo description debe ser obligatorio")
    .isString()
    .isLength({ min: 2, max: 100 }).withMessage("la descripcion debe de tener entre 2 a 100 caracteres"),
  body("is_complete")
    .notEmpty()
    .withMessage("El campo is_complete debe ser obligatorio")
    .isBoolean()
    .withMessage("El campo is_complete debe ser booleano"),
  body("user_id")
    .notEmpty()
    .withMessage("El campo user_id debe ser obligatorio")
    .isInt({ min: 1 })
    .withMessage("El campo user_id debe ser un entero"),
];

//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

export const updateTaskValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un entero")
    .custom(async (value) => {
      const task = await taskModel.findByPk(value);
      if (!task) {
        throw new Error("La tarea no existe");
      }
    }),
  body("title")
    .trim()
    .optional()
    .isString()
    .withMessage("El campo title debe ser una cadena de caracteres")
    .isLength({ min: 2, max: 100 })
    .withMessage("El title debe de tener entre 2 y 100 caracteres")
    .custom(async (value, {req} ) => {
      const taskExists = await taskModel.findOne({
        where: { title: value, id: { [Op.ne]: req.params.id } },
      });
      if (taskExists) {
        throw new Error("Ese usuario ya existe");
      }
      return true;
    }),
  body("description")
    .trim()
    .optional()
    .isString()
    .isLength({ min: 2, max: 100 })
    .withMessage("El campo description debe ser de 2 a 100 caracteres"),
  body("is_complete")
    .optional()
    .isBoolean()
    .withMessage("El campo is_complete debe ser booleano"),
  body("user_id")
    .optional()
    .isInt({ min: 1 })
    .withMessage("El campo user_id debe ser un entero"),
];


export const getTaskIDValidation = [
  param("id")
    .exists()
    .isInt({ min: 1 })
    .withMessage("El campo ID debe ser un numero")
    .custom(async (value) => {
      const task = await taskModel.findByPk(value);
      if (!task) {
        throw new Error("La tarea no existe");
      }
    }),
];

export const deleteTaskValidation = [
  param("id")
    .exists()
    .isInt({ min: 1 })
    .withMessage("El campo ID debe ser un numero")
    .custom(async (value) => {
      const task = await taskModel.findByPk(value);
      if (!task) {
        throw new Error("La tarea no existe");
      }
    }),
];