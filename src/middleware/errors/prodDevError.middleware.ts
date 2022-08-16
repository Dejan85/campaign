import type { Response } from "express";
import { AppError } from "../../utils/AppError";

// send error for production
export const sendErrorProd = (err: AppError, res: Response) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  res.status(500).json({
    status: "error",
    message: "Something went wrong in programing",
  });
};

// send error for development
export const sendErrorDev = (err: AppError, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    ...err,
  });
};
