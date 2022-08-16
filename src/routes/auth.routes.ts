import express from "express";
import {
  signupValidation,
  signinValidation,
} from "../middleware/validators/auth";
import { hashPassword, validatePasswordAndEmail } from "../middleware/bcrypt";
import { userAlreadyExist } from "../middleware/errors";
import { signup, signin } from "../controllers/auth.controller";
const router = express.Router();

router.post(
  "/signup",
  signupValidation,
  userAlreadyExist,
  hashPassword,
  signup
);
router.post("/signin", signinValidation, validatePasswordAndEmail, signin);

export default router;
