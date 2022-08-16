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
exports.validatePasswordAndEmail = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_1 = require("../../queries/users");
const utils_1 = require("../../utils");
exports.hashPassword = (0, utils_1.tryCatch)((req) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = req.body;
    const hashedPassword = yield bcrypt_1.default.hash(password, 8);
    req.body.password = hashedPassword;
}));
exports.validatePasswordAndEmail = (0, utils_1.tryCatch)((req) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const response = yield (0, users_1.getUserByEmail)(email);
    if (!!(response === null || response === void 0 ? void 0 : response.length)) {
        const user = response[0];
        req.user = user;
        const match = yield bcrypt_1.default.compare(password, user.password);
        if (!match) {
            throw {
                message: `The password ${password} is wrong`,
                statusCode: 404,
            };
        }
    }
    else {
        throw {
            message: `User with this ${email} does not exist`,
            statusCode: 404,
        };
    }
}));
