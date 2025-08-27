import { body, param } from "express-validator";
import { userModel } from "../models/user.model.js";
import { Op } from "sequelize";
export const createUserValidators = [
    body("name")
    .notEmpty()
    .withMessage("el campo debe de ser obligatorio")
    .isString()
    .isLength({min: 2, max: 100})
    .withMessage("El nombre debe tener entre 2 a 100 caracteres")
    .isString()
    .isLength({min: 8, max: 100})
    .custom(async (value)=>{
        const userExists = await userModel.findOne({
            where: { email: value},
        });
        if(!userExists){
            throw new Error("eEse usuario ya existe");
        }
        return true;
    }),
    
    body("password")
    .notEmpty()
    .withMessage("el campo password debe de ser obligatorio")
    .isString()
    .isLength({min: 5, max: 100})
    .withMessage("la contraseña debe de tener entre 5 a 100 caracteres")
    ,
    body("person_id")
    .notEmpty()
    .withMessage("el campo person_id debe ser obligatorio")
    .isInt({min: 1})
    .withMessage("el campo person_id debe de ser un numero")
];




export const updateUserValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un entero")
    .custom(async (value) => {
      const user = await userModel.findByPk(value);
      if (!user) {
        throw new Error("El usuario no existe");
      }
    }),
  body("name")
    .optional()
    .isString()
    .withMessage("El campo name debe ser una cadena de caracteres")
    .isLength({ min: 2, max: 100 })
    .withMessage("El name debe ser entre 2 y 100 caracteres"),
  body("email")
    .optional()
    .isString()
    .isLength({ min: 2, max: 100 })
    .withMessage("El campo email debe ser de 2 a 100 caracteres")
    .custom(async (value, {req} ) => {
      const userExists = await userModel.findOne({
        where: { email: value, id: { [Op.ne]: req.params.id } },
      });
      if (userExists) {
        throw new Error("Ese usuario ya existe");
      }
      return true;
    }),
  body("password")
    .optional()
    .isString()
    .isLength({ min: 2, max: 100 })
    .withMessage("El campo password debe ser de 2 a 100 caracteres"),
];


export const getUserIDValidation = [
  param("id")
    .exists()
    .isInt({ min: 1 })
    .withMessage("El campo ID debe ser un numero")
    .custom(async (value) => {
      const user = await userModel.findByPk(value);
      if (!user) {
        throw new Error("El usuario no existe");
      }
    }),
];

export const deleteUserValidation = [
  param("id")
    .exists()
    .isInt({ min: 1 })
    .withMessage("El campo ID debe ser un numero")
    .custom(async (value) => {
      const user = await userModel.findByPk(value);
      if (!user) {
        throw new Error("El usuario no existe");
      }
    }),
];