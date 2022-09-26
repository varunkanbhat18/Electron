import mongoose from "mongoose";

const sensorDataSchema = new mongoose.Schema({

    sensorNo: {
        type: String,
        required: [true, "Please provide senseor number"]
    },
    temperature: {
        type: String,
        required: [true, "Give temperature readings"]
    },
    humidity: {
        type: String,
        required: [true, "Provide humidity value"]
    },
    voltage: {
        type: String,
        required: [true, "Provide the voltage of battery"]
    }
}, {
    timestamps: true
})

const SensorData = mongoose.model("SensorData", sensorDataSchema)

export default SensorData