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
exports.createCampaign = void 0;
const sql_config_1 = require("../../config/sql.config");
// export const createCampaignTable = async () => {
//   const query = `
//                 CREATE TABLE campaigns (id INT AUTO_INCREMENT, name VARCHAR(255) NOT NULL, slug VARCHAR(255), dateFrom DATE NOT NULL, dateTo DATE NOT NULL, active BOOLEAN NOT NULL, PRIMARY KEY(id) )
//     `;
//   const [row] = await pool.query(query);
// };
// create campaign
const createCampaign = ({ name, slug, date_from, date_to, active, }) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
                INSERT INTO campaigns (name, slug, dateFrom, dateTo, active)
                VALUES (?, ?, ?, ?, ?)
    `;
    const [rows] = yield sql_config_1.pool.query(query, [
        name,
        slug,
        date_from,
        date_to,
        active,
    ]);
    return rows;
});
exports.createCampaign = createCampaign;
