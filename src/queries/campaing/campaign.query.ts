import { pool } from "../../config/sql.config";
import { CreateCampaignI } from "./campaing.interface";

// export const createCampaignTable = async () => {
//   const query = `
//                 CREATE TABLE campaigns (id INT AUTO_INCREMENT, name VARCHAR(255) NOT NULL, slug VARCHAR(255), dateFrom DATE NOT NULL, dateTo DATE NOT NULL, active BOOLEAN NOT NULL, PRIMARY KEY(id) )
//     `;

//   const [row] = await pool.query(query);
// };

// create campaign
export const createCampaign = async ({
  name,
  slug,
  date_from,
  date_to,
  active,
}: CreateCampaignI) => {
  const query = `
                INSERT INTO campaigns (name, slug, dateFrom, dateTo, active)
                VALUES (?, ?, ?, ?, ?)
    `;

  const [rows] = await pool.query(query, [
    name,
    slug,
    date_from,
    date_to,
    active,
  ]);

  return rows;
};
