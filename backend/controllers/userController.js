import User from "../models/userModel.js";
import asyncHandler from "express-async-handler"
import bcrypt from "bcryptjs"

//@desc Register new user
//@route POST /
//@access Public
const registerUser = asyncHandler( async (req, res) => {

    const { name, sensorNo, email, password } = req.body

    if(!name || !sensorNo || !email || !password){
        res.status(400)
        throw new Error("Please fill all field")
    }

    // Check if User Exist
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error("User Already Exists")
    }
    
    //Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create User
    const user = await User.create({
        name,
        sensorNo,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            sensorNo: user.sensorNo,
            email: user.email,
            password: user.password
        })
    }
    else {
        res.status(400)
        throw new Error("Invalid user data")
    }
})

//@desc Login User
//@route POST /login
//@access Public
const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    if(!email || !password){
        res.status(401)
        throw new Error("Please fill all field")
    }

    const user = await User.findOne({email})

    const passwordCheck = await bcrypt.compare(password, user.password)

    if(user && passwordCheck) {

        res.status(201).json(user)
    }
    else {
        res.status(401)
        throw new Error("Invalid Credentials");
    }

}
) 

const getUser = asyncHandler(async (req, res) => {

    const user = await User.find({})

    if(user){
        res.status(200).json(user)
    }
    else {
        res.status(401)
        throw new Error("Not found")
    }
})

export { registerUser, loginUser, getUser}