import { Router } from "express";
import {
  createComment,
  fetchComments,
  showComment,
  deleteComment,
} from "../Controller/CommentController.js";

const router = Router();

router.get("/fetchcomment", fetchComments);
router.get("/showcomment/:id", showComment);
router.post("/createcomment", createComment);
// router.put("/:id", updateUser);
router.delete("/deletecomment/:id", deleteComment);

export default router;