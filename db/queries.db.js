import { pool } from "../db/index.js";

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});
//pueden hacerse recursivas las queries

const queries = async (query, values) => {
  const client = await pool.connect();
  const res = await client.query(query, values);
  return res.rows[0];
};

export { queries };
