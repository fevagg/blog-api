import { pool } from "../db/index.js";

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

const getPost = async (id) => {
  const client = await pool.connect();
  const res = await client.query("SELECT * FROM posts WHERE id = $1", [id]);
  return res.rows[0];
};
const newPost = async (values) => {
  const client = await pool.connect();
  const res = await client.query(
    "INSERT INTO posts(title, date, body) VALUES($1, $2) RETURNING *",
    [values]
  );

  return res.rows[0];
};
// const editPost = await client.query("");
const deletePost = async (id) => {
  const client = await pool.connect();
  const res = await client.query("DELETE * FROM posts WHERE id = $1", [id]);
  return res.rows[0];
};

export { getPost, newPost, deletePost };
