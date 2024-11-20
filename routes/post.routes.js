import {Router} from "express"
import { createPost, deletePost, fetchPosts, searchPost, showPost, updatePost } from "../controller/post.controller.js"

const router = Router()

router.post("/createpost",createPost)
router.get("/getposts",fetchPosts)
router.get("/searchpost", searchPost);
router.put("/updatepost/:id", updatePost)
router.get("/showpost/:id", showPost)
router.delete("/deletepost/:id", deletePost)

export default router;
