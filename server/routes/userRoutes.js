import express from "express"
import { registerUser,loginUser } from "../controllers/userController.js"
const router = new express.Router()

router.post("/users/register", registerUser)
router.post("/users/login", loginUser)
// router.post("/users/logout",logoutUser)
// router.post("/users/logoutAll",logoutAllUser)

export default router