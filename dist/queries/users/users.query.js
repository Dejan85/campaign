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
exports.deleteUser = exports.getUserByEmail = exports.updateUser = exports.getUser = exports.createUser = void 0;
const sql_config_1 = require("../../config/sql.config");
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
const createUser = ({ name, email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
                    INSERT INTO USERS ( name, email, password)
                    VALUES (?, ?, ?)
    `;
    const [rows] = yield sql_config_1.pool.query(query, [name, email, password]);
    return rows;
});
exports.createUser = createUser;
// get user
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
                    SELECT name, email,
                    FROM users
                    WHERE id = ? 
    `;
    const [rows] = yield sql_config_1.pool.query(query, [id]);
    return rows;
});
exports.getUser = getUser;
// update user
const updateUser = ({ name, email, password, id, }) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
                    UPDATE users
                    SET name = ?, email = ?, password = ?
                    WHERE id = ?
    `;
    const [rows] = yield sql_config_1.pool.query(query, [name, email, password, id]);
    return rows;
});
exports.updateUser = updateUser;
// get user by email
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
              SELECT email,name, password
              FROM users
              WHERE email = ?
    `;
    const [rows] = yield sql_config_1.pool.query(query, [email]);
    return rows;
});
exports.getUserByEmail = getUserByEmail;
// delete user
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
            DELETE FROM users
            WHERE id = ?
    `;
    const [rows] = yield sql_config_1.pool.query(query, [id]);
    return rows;
});
exports.deleteUser = deleteUser;
