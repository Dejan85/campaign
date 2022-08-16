import { getUserByEmail } from "../../queries/users";
import { tryCatch } from "../../utils";

export const userAlreadyExist = tryCatch(async (req) => {
  const { email } = req.body;
  const user = await getUserByEmail(email);

  if (!!user?.length) {
    throw {
      message: "User already exist!",
      statusCode: 400,
    };
  }
});
