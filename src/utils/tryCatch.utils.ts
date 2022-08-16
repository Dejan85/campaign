import { Request, Response, NextFunction } from "express";
import { nextHandler } from "./nextHandler.utils";

type fnType = (req: Request, res: Response, next: NextFunction) => Promise<any>;

export const tryCatch =
  (fn: fnType) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
      next();
    } catch (error) {
      nextHandler(next, {
        ...error,
      });
    }
  };
