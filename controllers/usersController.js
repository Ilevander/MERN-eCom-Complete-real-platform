// usersController.js
import User from "../model/User.js";
import bcrypt from "bcryptjs";

// @desc: Register user
// @route: POST /api/v1/users/register
// @access: Private/Admin

export const registerUserController = async (req, res) => {
    // res.json({
    //     msg: "User register controller",
    // });

    const { fullname, email, password } = req.body;
    // **** Check if User Exists ****
    const userExists = await User.findOne({ email });
    if (userExists) {
        // throw
        res.json({
            msg: "User already exists",
        });
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt);
    // Create the user
    const user = await User.create({
        fullname,
        email,
        password,
    });
    res.status(201).json({
        status: "success",
        message: "User Registered Successfully",
        data: user,
    });
};
