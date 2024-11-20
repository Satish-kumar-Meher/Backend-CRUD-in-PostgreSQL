import { Router } from "express";
import UserRoutes from "./user.routes.js"
import PostRoutes from "./post.routes.js"
import CommentRoutes from "./comment.routes.js"
const router = Router()

router.use("/api/user",UserRoutes)

router.use("/api/post",PostRoutes)
router.use("/api/comment",CommentRoutes)

export default router;