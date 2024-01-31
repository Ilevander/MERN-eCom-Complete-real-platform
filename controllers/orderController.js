import Order from "../model/Order";
import asyncHandler from "express-async-handler";

// @desc  create Orders
// @route POST /api/v1/orders
// @access private

export const createOrderController =  asyncHandler(async (req,res) => {
      res.json({
        msg: "Order Controller",
      });
});