export class AppError extends Error {
  statusCode: number;
  status: string;
  data?: string[] | number[];
  isOperational: boolean;

  constructor(message: string, statusCode: number, data?: string[] | number[]) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    this.data = data;

    Error.captureStackTrace(this, this.constructor);
  }
}
