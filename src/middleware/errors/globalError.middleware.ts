import type { ErrorRequestHandler } from "express";
import { sendErrorProd, sendErrorDev } from "./index";

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  }

  if (process.env.NODE_ENV === "production") {
    sendErrorProd(err, res);
  }
};
