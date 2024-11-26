import { Router } from "express";

const router = Router();

router.post("/new");
router.get("/:id");
router.patch("/:id/edit");
router.delete("/:id/delete");

export default router;
