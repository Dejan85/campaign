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
exports.deleteTour = exports.updateTour = exports.tour = exports.tours = exports.newTour = void 0;
const sql_config_1 = require("../../config/sql.config");
// create tours table
// export const createToursTable = async () => {
//   const query = `
//                   CREATE TABLE tours(id int AUTO_INCREMENT, name VARCHAR(255), duration int, difficulty VARCHAR(255), PRIMARY KEY(id))
//     `;
//   await pool.query(query);
// };
// create new tour
const newTour = ({ name, duration, difficulty }) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
                INSERT INTO tours (name, duration, difficulty)
                VALUES(?, ?, ?)
    `;
    const [rows] = yield sql_config_1.pool.query(query, [name, duration, difficulty]);
    return rows;
});
exports.newTour = newTour;
// get all tours
const tours = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
              SELECT * FROM tours
  `;
    const [rows] = yield sql_config_1.pool.query(query);
    return rows;
});
exports.tours = tours;
// get tour
const tour = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
                  SELECT name, duration, difficulty
                  FROM tours
                  WHERE id = ?
    `;
    const [rows] = yield sql_config_1.pool.query(query, [id]);
    return rows;
});
exports.tour = tour;
// update tour
const updateTour = ({ id, name, duration, difficulty, }) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
              UPDATE tours
              SET name = ?, duration = ?, difficulty = ?
              WHERE id = ?
  
  `;
    const [rows] = yield sql_config_1.pool.query(query, [
        name,
        duration,
        difficulty,
        id,
    ]);
    return rows;
});
exports.updateTour = updateTour;
// delete tour
const deleteTour = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
              DELETE FROM tours
              WHERE id = ?
  `;
    const [rows] = yield sql_config_1.pool.query(query, [id]);
    return rows;
});
exports.deleteTour = deleteTour;
