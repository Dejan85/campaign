"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendErrorDev = exports.sendErrorProd = void 0;
// send error for production
const sendErrorProd = (err, res) => {
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
exports.sendErrorProd = sendErrorProd;
// send error for development
const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json(Object.assign({ status: err.status, message: err.message, stack: err.stack }, err));
};
exports.sendErrorDev = sendErrorDev;
