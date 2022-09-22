import { setSensor } from "../controllers/sensorController.js";
import express from "express"

const router = express.Router()

router.route("/register")
     .post(setSensor)

export default router