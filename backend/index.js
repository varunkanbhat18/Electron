import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routers/userRoute.js";
import sensorRoutes from "./routers/sensorRoute.js"
import connectDB from "./config/db.js"
import ErroHandler from "./middleware/errorMiddleware.js"
import _ from "lodash"

const app = express()

const PORT = process.env.PORT || 4000

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/", userRoutes)

app.use("/sensor", sensorRoutes)

app.use(ErroHandler)

app.listen(PORT, () => {
    try {
        console.log("Server is listening");
    } catch (error) {
        console.log(error.message);
    }
})