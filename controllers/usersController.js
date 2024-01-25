import User from "../model/User";

// @desc : Register user
// @route : POST /api/v1/users/register
// @access Private/Admin

export const registerUserController = async (req, res) => {
    res.json({
        msg: "User register controller",
    });
};
