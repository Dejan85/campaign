"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const index_1 = require("./index");
const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    if (process.env.NODE_ENV === "development") {
        (0, index_1.sendErrorDev)(err, res);
    }
    if (process.env.NODE_ENV === "production") {
        (0, index_1.sendErrorProd)(err, res);
    }
};
exports.globalErrorHandler = globalErrorHandler;
