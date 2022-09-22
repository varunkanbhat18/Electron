import express from "express"
import {registerUser, loginUser, getUser} from "../controllers/userController.js";

const router = express.Router()

router.route("/")
    .post(registerUser)

router.route("/login")
    .post(loginUser)

router.route("/user")
    .get(getUser)

export default router
