import { setSensor, getSensor } from "../controllers/sensorController.js";
import express from "express"

const router = express.Router()

router.route("/register")
     .post(setSensor)

router.route("/info")
     .get(getSensor)

export default router