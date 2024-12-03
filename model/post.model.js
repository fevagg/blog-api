import { queries } from "../db/queries.db.js";

/* All the model queries has its own trycatch statement for error handling and its independence from one of the other. This ones points to their homonym as controller to preserve the API structure. */

const getPostModel = async (id) => {
  try {
    const res = await queries("SELECT * FROM posts WHERE id = $1", [id]);
    return res;
  } catch (error) {
    throw new Error(`An error has ocurred: ${error}`);
  }
};

const newPostModel = async (values) => {
  const { title, date, body } = values;
  try {
    const res = await queries(
      "INSERT INTO posts(title, date, body) VALUES($1, $2, $3) RETURNING title",
      [title, date, body]
    );
    return res;
  } catch (error) {
    throw new Error(`An error has ocurred: ${error}`);
  }
};

//SETTING QUERY FOR UPDATING
const editPostModel = async (id, cols) => {
  const { title, date, body } = cols;
  //Set the beginning of the statement
  const query = ["UPDATE posts"];
  query.push("SET");

  //Create an array where all the columns get concatenated
  const set = [];
  Object.keys(cols).forEach((key, i) => {
    set.push(key + " = ($" + (i + 1) + ")");
  });

  //Set the space for conditionals
  query.push(set.join(", "));
  query.push("WHERE id = " + id);
  query.push("RETURNING *");
  //Pass the whole query
  try {
    const res = await queries(query.join(" "), [title, date, body]);
    return res;
  } catch (error) {
    throw new Error(`An error has ocurred: ${error}`);
  }
};

const deletePostModel = async (id) => {
  try {
    const res = await queries(
      "DELETE FROM posts WHERE id = $1 RETURNING id",
      [id]
    );
    return res;
  } catch (error) {
    throw new Error(`An error has ocurred: ${error}`);
  }
};

export { getPostModel, newPostModel, deletePostModel, editPostModel };
