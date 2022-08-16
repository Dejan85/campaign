"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextHandler = void 0;
const errors_1 = require("../middleware/errors");
const nextHandler = (next, { message, statusCode, data, }) => {
    next(new errors_1.AppError(message, statusCode, data));
};
exports.nextHandler = nextHandler;
