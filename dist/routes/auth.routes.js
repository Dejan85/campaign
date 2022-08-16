"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/validators/auth");
const bcrypt_1 = require("../middleware/bcrypt");
const errors_1 = require("../middleware/errors");
const auth_controller_1 = require("../controllers/auth.controller");
const router = express_1.default.Router();
router.post("/signup", auth_1.signupValidation, errors_1.userAlreadyExist, bcrypt_1.hashPassword, auth_controller_1.signup);
router.post("/signin", auth_1.signinValidation, bcrypt_1.validatePasswordAndEmail, auth_controller_1.signin);
exports.default = router;
