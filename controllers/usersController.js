// usersController.js
import User from "../model/User.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";
import { getTokenFromHeader } from "../utils/getTokenFromHeader.js";
import { verifyToken } from "../utils/verifyToken.js";
import User from "../model/User.js";

// @desc: Register user
// @route: POST /api/v1/users/register
// @access: Private/Admin
export const registerUserController = asyncHandler(async (req, res) => {
    // res.json({
    //     msg: "User register controller",
    // });

    const { fullname, email, password } = req.body;
    // **** Check if User Exists ****
    const userExists = await User.findOne({ email });
    if (userExists) {
        // throw
         throw new Error("User already exists");
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt);
    // Create the user
    const user = await User.create({
        fullname,
        email,
        password : hashPassword,
    });
    res.status(201).json({
        status: "success",
        message: "User Registered Successfully",
        data: user,
    });
});



//@desc : Login user
//@route POST /api/v1/users/login
//@access Public
export const loginUserController = asyncHandler(async (req,res) => {
    const {email,password} = req.body;
    //Find the user in db by email only
    const userFound = await User.findOne({
        email,
    });
    if(userFound && await bcrypt.compare(password,userFound?.password)){
        res.json({
            status:'Login Success',
            message: 'User Logged in successfully',
            userFound,
            token: generateToken(userFound?._id)
        });
    }else{
        throw new Error('Invalid Login Credentials');
    }
    
})


// @desc  GET user profile
// @route GET /api/v1/users/profile
// @access Private
export const getUserProfileController = asyncHandler(async (req,res) => {
    //Take token from header
    const token = getTokenFromHeader(req);
    //verify Token
    const verified = verifyToken(token);
    console.log(verified);
    // console.log(req.headers);
    res.json({
        msg: "Welcome Profile page",
    });
});

// @desc  Update user shipping address
// @route PUT /api/v1/update/shipping
// @access Private
export const updateShippingAddressController = asyncHandler(async(req,res) => {
    const {firstName , lastName , address , city , postalCode , province , } = req.body;
    const user = await User.findByIdAndUpdate(req.userAthId, {
        shippingAddress: {
            firstName,
            lastName,
            address,
            city,
            postalCode,
            province,
            phone,
        },
        hasShippingAddress: true,
    },
    {
        new: true,
    });
    //Send response 
    res.json({
        status: "success",
        message: "User shipping address updated successfully",
        user,
    });
});