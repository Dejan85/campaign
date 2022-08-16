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
exports.signin = exports.signup = void 0;
const utils_1 = require("../utils");
const users_1 = require("../queries/users");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// create user
exports.signup = (0, utils_1.tryCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    yield (0, users_1.createUser)({ name, email, password });
    res.status(201).json({
        message: "User created successfully!",
    });
}));
// login
exports.signin = (0, utils_1.tryCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name } = req.user;
    const token = jsonwebtoken_1.default.sign({ id: email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES,
    });
    res.status(200).json({
        message: "You logged successfully",
        user: {
            email,
            name,
            token,
        },
    });
}));
