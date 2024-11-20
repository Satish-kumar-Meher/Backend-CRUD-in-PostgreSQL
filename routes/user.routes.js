import {Router} from "express"
import {createUser, deleteUser, fetchUsers, showUser, updateUser} from "../controller/user.controller.js"

const router = Router()

router.post("/signin",createUser)
router.get("/getusers",fetchUsers)

router.put("/update/:id", updateUser)
router.get("/showuser/:id", showUser)
router.delete("/deleteuser/:id", deleteUser)

export default router;
