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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAlreadyExist = void 0;
const users_1 = require("../../queries/users");
const utils_1 = require("../../utils");
exports.userAlreadyExist = (0, utils_1.tryCatch)((req) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const user = yield (0, users_1.getUserByEmail)(email);
    if (!!(user === null || user === void 0 ? void 0 : user.length)) {
        throw {
            message: "User already exist!",
            statusCode: 400,
        };
    }
}));
