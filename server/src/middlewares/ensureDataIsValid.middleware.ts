import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const ensureDataIsValid =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const validateData: any = schema.parse(req.body);

    req.body = validateData;

    return next();
  };

export default ensureDataIsValid;
