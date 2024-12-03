import {
  getPostModel,
  newPostModel,
  deletePostModel,
  editPostModel,
} from "../model/post.model.js";

/* All the controllers are pointing to their homonyms as routes, having its own logic for error handling, returning just the needed data. */

const getPostController = async (req, res) => {
  const { id } = req.params;
  const queryRes = await getPostModel(id);
  if (queryRes !== undefined || null) res.send(queryRes);
  else res.send("The data was not found");
};

const newPostController = async (req, res) => {
  const { title, date, body } = req.body;
  const queryRes = await newPostModel({ title, date, body });
  if (queryRes !== undefined || null)
    res.send(`New post added: ${queryRes.title}`);
  else res.send("An error has occurred, try again");
};

const editPostController = async (req, res) => {
  const { title, date, body } = req.body;
  const queryRes = await editPostModel(req.params.id, {
    title,
    date,
    body,
  });
  if (queryRes !== undefined || null) res.send("The post has been updated");
  else res.send("An error has occurred, try again");
};

const deletePostController = async (req, res) => {
  const queryRes = await deletePostModel(req.params.id);
  if (queryRes !== undefined || null) res.send("The post has been deleted");
  else res.send("An error has occurred, try again");
};

export {
  getPostController,
  newPostController,
  deletePostController,
  editPostController,
};
