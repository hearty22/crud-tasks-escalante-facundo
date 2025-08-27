import { validationResult } from "express-validator";

export const validator = (req, res, next)=>{
    const result = validationResult(req);
    if(!result){return res.json({error: result.mapped()})};

    next();
};