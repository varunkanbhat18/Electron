import mongoose from "mongoose";

const sensorSchema = new mongoose.Schema({
    sensorNo: {
        type: String,
        required: [true, "Please add sensor number"],
        unique: true
    },
    userEmail: {
        type: String,
        required: [true, "Please add email address"],
    },
    sensorName: {
        type: String,
        required: [true, "Please add sesnor name"]
    }
},{
    timestamps: true
}
)

const Sensor = mongoose.model("Sensor", sensorSchema)

export default Sensor;