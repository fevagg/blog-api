import { pool } from "../db/index.js";

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

const queries = async (query, values) => {
  const client = await pool.connect();
  const res = await client.query(query, values);
  const data = res.rows[0];
  client.release();
  return data;
};

export { queries };
