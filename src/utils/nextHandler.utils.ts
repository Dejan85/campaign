import { NextFunction } from "express";
import { AppError } from "../middleware/errors";

export const nextHandler = (
  next: NextFunction,
  {
    message,
    statusCode,
    data,
  }: { message: string; statusCode: number; data?: number[] | string[] }
) => {
  next(new AppError(message, statusCode, data));
};
