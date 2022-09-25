import SensorData from "../models/sensorDataModel.js";
import Sensor from "../models/sensorModel.js";
import asyncHandler from "express-async-handler"

const setSensorData = asyncHandler(async (req, res) => {

    const {sensorNo, temperature, humidity, voltage} = req.body

    const sensor = await Sensor.find({sensorNo})

    if(!sensor){
        res.status(401)
        throw new Error("Please register this sensor first")
    }

    const sensorData = await SensorData.create({
        sensorNo,
        temperature,
        humidity,
        voltage
    })

    if(sensorData){
        res.status(200).json({
            sensorNo: sensorData.sensorNo,
            temperature: sensorData.temperature,
            humidity: sensorData.humidity,
            voltage: sensorData.voltage
        })
    }
    else {
        res.status(401)
        throw new Error("Send the data again")
    }
})

export { setSensorData }