import Sensor from "../models/sensorModel.js"
import asyncHandler from "express-async-handler"

const setSensor = asyncHandler(async (req, res) => {

    const {sensorNo, userEmail, sensorName} = req.body

    if(!sensorNo || !userEmail || !sensorName){
        res.status(401)
        throw new Error("Please fill all field")
    }

    const sensor = await Sensor.create({
        sensorNo,
        userEmail,
        sensorName
    })

    if(sensor){

        res.status(201).json({
            sensorNo: sensor.sensorNo,
            userEmail: sensor.userEmail,
            sensorName: sensor.sensorName
        })
    }
    else {
        res.status(401)
        throw new Error("Please try again")
    }
})

export { setSensor }