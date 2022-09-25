import express from "express"
import { setSensorData } from "../controllers/sensorDataController.js"

const router = express.Router()

router.route("/")
    .post(setSensorData)

export default router