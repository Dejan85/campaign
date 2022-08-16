"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTour = exports.updateTour = exports.tour = exports.tours = exports.newTours = void 0;
const tours_1 = __importDefault(require("../queries/tours"));
const utils_1 = require("../utils");
// new tours
exports.newTours = (0, utils_1.tryCatch)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, duration, difficulty } = req.body;
    const rows = yield tours_1.default
        .newTour({
        name,
        duration,
        difficulty,
    })
        .catch((err) => next(err));
    if (!!rows) {
        return res.status(201).json({
            message: "The tour create successfully",
            data: { name, duration, difficulty },
        });
    }
    throw {
        statusCode: 400,
        message: `You cant create tour`,
    };
}));
// get all tours
exports.tours = (0, utils_1.tryCatch)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const rows = yield tours_1.default.tours().catch((err) => next(err));
    if (!!rows.length) {
        return res.status(200).json({
            message: "You get all tours successfully",
            data: rows,
        });
    }
    throw {
        statusCode: 404,
        message: "There is no tours",
        data: [],
    };
}));
// get tour
exports.tour = (0, utils_1.tryCatch)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tour = yield tours_1.default.tour(id).catch((err) => next(err));
    if (!!(tour === null || tour === void 0 ? void 0 : tour.length)) {
        return res.status(200).json({
            message: "You find tour successfully",
            data: tour,
        });
    }
    throw {
        statusCode: 404,
        message: `You cant find any tour with id ${id}`,
        data: [],
    };
}));
// update tour
exports.updateTour = (0, utils_1.tryCatch)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, duration, difficulty } = req.body;
    const response = yield tours_1.default
        .updateTour({
        id,
        name,
        duration,
        difficulty,
    })
        .catch((err) => next(err));
    if (!!(response === null || response === void 0 ? void 0 : response.affectedRows)) {
        return res.status(201).json({
            message: "You updated tour successfully",
            data: { name, duration, difficulty },
        });
    }
    throw {
        statusCode: 404,
        message: `You cant find any tour with that id ${id}`,
    };
}));
// delete tour
exports.deleteTour = (0, utils_1.tryCatch)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const response = yield tours_1.default.deleteTour(id).catch((err) => next(err));
    if (!!response.affectedRows) {
        return res.status(204).json({
            message: `You successfully deleted tour with id ${id}`,
            data: null,
        });
    }
    throw {
        statusCode: 404,
        message: `You cant find any tour with that ${id}`,
    };
}));
