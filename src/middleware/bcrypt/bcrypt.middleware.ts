import bcrypt from "bcrypt";
import { getUserByEmail } from "../../queries/users";
import { tryCatch } from "../../utils";

export const hashPassword = tryCatch(async (req) => {
  const { password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);
  req.body.password = hashedPassword;
});

export const validatePasswordAndEmail = tryCatch(async (req) => {
  const { email, password } = req.body;
  const response = await getUserByEmail(email);

  if (!!response?.length) {
    const user: { name: string; email: string; password: string } = response[0];
    req.user = user;
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw {
        message: `The password ${password} is wrong`,
        statusCode: 404,
      };
    }
  } else {
    throw {
      message: `User with this ${email} does not exist`,
      statusCode: 404,
    };
  }
});
