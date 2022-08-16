import { Request, Response, NextFunction } from "express";
import { tryCatch } from "../../../utils";
import * as yup from "yup";

export const signupValidation = tryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password, passwordConfirmation } = req.body;

    const schema = yup.object().shape({
      name: yup.string().required("Name is required"),
      email: yup.string().email().required("Email is required"),
      password: yup
        .string()
        .min(5, "Password must be min 5 character")
        .max(20, "Password must be min 20 character")
        .required("Password is required"),
      passwordConfirmation: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Password confirmation is required"),
    });

    await schema.validate({
      name,
      email,
      password,
      passwordConfirmation,
    });
  }
);

export const signinValidation = tryCatch(async (req, res, next) => {
  const { email, password } = req.body;
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  await schema.validate({ email, password });
});
