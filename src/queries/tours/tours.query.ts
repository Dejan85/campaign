import { pool } from "../../config/sql.config";
import { NewTourI, UpdateTourI } from "./tours.interface";

// create tours table
// export const createToursTable = async () => {
//   const query = `
//                   CREATE TABLE tours(id int AUTO_INCREMENT, name VARCHAR(255), duration int, difficulty VARCHAR(255), PRIMARY KEY(id))
//     `;

//   await pool.query(query);
// };

// create new tour
export const newTour = async ({ name, duration, difficulty }: NewTourI) => {
  const query = `
                INSERT INTO tours (name, duration, difficulty)
                VALUES(?, ?, ?)
    `;

  const [rows]: any[] = await pool.query(query, [name, duration, difficulty]);
  return rows;
};

// get all tours
export const tours = async () => {
  const query = `
              SELECT * FROM tours
  `;

  const [rows]: any[] = await pool.query(query);
  return rows;
};

// get tour
export const tour = async (id: string) => {
  const query = `
                  SELECT name, duration, difficulty
                  FROM tours
                  WHERE id = ?
    `;

  const [rows]: any[] = await pool.query(query, [id]);
  return rows;
};

// update tour
export const updateTour = async ({
  id,
  name,
  duration,
  difficulty,
}: UpdateTourI) => {
  const query = `
              UPDATE tours
              SET name = ?, duration = ?, difficulty = ?
              WHERE id = ?
  
  `;

  const [rows]: any[] = await pool.query(query, [
    name,
    duration,
    difficulty,
    id,
  ]);
  return rows;
};

// delete tour
export const deleteTour = async (id: string) => {
  const query = `
              DELETE FROM tours
              WHERE id = ?
  `;

  const [rows]: any[] = await pool.query(query, [id]);
  return rows;
};
