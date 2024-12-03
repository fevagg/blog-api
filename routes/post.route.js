import { Router } from "express";
import {
  getPostController,
  newPostController,
  deletePostController,
  editPostController,
} from "../controller/post.controller.js";

const router = Router();

router.get("/:id", getPostController);
router.post("/new", newPostController);
router.put("/:id/edit", editPostController);
router.delete("/:id/delete", deletePostController);

export default router;
