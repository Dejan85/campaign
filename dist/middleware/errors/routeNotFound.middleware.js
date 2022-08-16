"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeNotFound = void 0;
const routeNotFound = (req, res, next) => {
    throw {
        statusCode: 404,
        message: `Cant find route ${req.originalUrl} on this server`,
    };
};
exports.routeNotFound = routeNotFound;
