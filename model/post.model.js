import { queries } from "../db/queries.db.js";

const getPost = async (id) => {
  const res = await queries("SELECT * FROM posts WHERE id = $1", [id]);
  return res.rows[0];
};
const newPost = async (values) => {
  const res = await queries(
    "INSERT INTO posts(title, date, body) VALUES($1, $2) RETURNING *",
    [values]
  );

  return res.rows[0];
};
// const editPost = await client.query("");
const deletePost = async (id) => {
  const res = await queries("DELETE * FROM posts WHERE id = $1", [id]);
  return res.rows[0];
};

export { getPost, newPost, deletePost };
