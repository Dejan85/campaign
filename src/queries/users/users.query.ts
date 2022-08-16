import { pool } from "../../config/sql.config";
import { CreateUserI, UpdateUserI } from "./users.interface";

// export const createUsersTable = async () => {
//   const query = `
//                     CREATE TABLE users(
//                         id int AUTO_INCREMENT,
//                         name VARCHAR(255),
//                         email VARCHAR(320),
//                         password VARCHAR(255),
//                         PRIMARY KEY(id)
//                         )
//     `;

//   const [rows] = await pool.query(query);
// };

// create new user
export const createUser = async ({ name, email, password }: CreateUserI) => {
  const query = `
                    INSERT INTO USERS ( name, email, password)
                    VALUES (?, ?, ?)
    `;

  const [rows] = await pool.query(query, [name, email, password]);
  return rows;
};

// get user
export const getUser = async (id: number) => {
  const query = `
                    SELECT name, email,
                    FROM users
                    WHERE id = ? 
    `;
  const [rows] = await pool.query(query, [id]);
  return rows;
};

// update user
export const updateUser = async ({
  name,
  email,
  password,
  id,
}: UpdateUserI) => {
  const query = `
                    UPDATE users
                    SET name = ?, email = ?, password = ?
                    WHERE id = ?
    `;

  const [rows] = await pool.query(query, [name, email, password, id]);
  return rows;
};

// get user by email
export const getUserByEmail = async (email: string) => {
  const query = `
              SELECT email,name, password
              FROM users
              WHERE email = ?
    `;

  const [rows]: any[] = await pool.query(query, [email]);
  return rows;
};

// delete user
export const deleteUser = async (id: number) => {
  const query = `
            DELETE FROM users
            WHERE id = ?
    `;

  const [rows] = await pool.query(query, [id]);
  return rows;
};
