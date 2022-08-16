import type { Request, Response, NextFunction } from "express";
import { nextHandler } from "../../utils";

export const routeNotFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  throw {
    statusCode: 404,
    message: `Cant find route ${req.originalUrl} on this server`,
  };
};
