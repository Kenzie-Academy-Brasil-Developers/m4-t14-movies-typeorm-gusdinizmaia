import { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";

const verifyData =
  (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {
    const validateData = schema.parse(req.body);
    req.body = validateData;
    return next();
  };

export { verifyData };
