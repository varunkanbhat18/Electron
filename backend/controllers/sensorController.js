import Sensor from "../models/sensorModel.js"
import User from "../models/userModel.js"
import asyncHandler from "express-async-handler"

const setSensor = asyncHandler(async (req, res) => {

    const {sensorNo, userEmail, sensorName} = req.body

    if(!sensorNo || !userEmail || !sensorName){
        res.status(401)
        throw new Error("Please fill all field")
    }

    const user = await User.findOne({email: userEmail})
    const sensorExists = await Sensor.findOne({sensorNo})

    if(!user){
        res.status(401)
        throw new Error("Register the user first")
    }
    
    if(!sensorExists){
        res.status(401)
        throw new Error("Sensor Already Registered")
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

const getSensor = asyncHandler(async (req, res) => {

    const sensor = await Sensor.find({})

    if(sensor){
        res.status(200).json(sensor)
    }
    else {
        res.status(401)
        throw new Error("Sensor not found")
    }
})

export { setSensor, getSensor}