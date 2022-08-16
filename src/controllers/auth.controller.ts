import { tryCatch } from "../utils";
import { createUser } from "../queries/users";
import jwt from "jsonwebtoken";

// create user
export const signup = tryCatch(async (req, res) => {
  const { name, email, password } = req.body;
  await createUser({ name, email, password });

  res.status(201).json({
    message: "User created successfully!",
  });
});

// login
export const signin = tryCatch(async (req, res) => {
  const { email, name } = req.user;

  const token = jwt.sign({ id: email }, process.env.JWT_SECRET, {
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
});
