import Order from "../model/Order";
import asyncHandler from "express-async-handler";
import User from "../model/User";
import Product from "../model/Product";

// @desc  create Orders
// @route POST /api/v1/orders
// @access private

export const createOrderController =  asyncHandler(async (req,res) => {
    //   res.json({
    //     msg: "Order Controller",
    //   });

    //Get the payload(customer,orderItems, shippingAddress, totalPrice)
    const { orderItems , shippingAddress , totalPrice } = req.body;
    console.log({
        orderItems,
        shippingAddress,
        totalPrice,
    })
    //Find the user:
    const user = await User.findById(req.userAuthId);
    
    //Check if Order is not empty:
    if(orderItems?.length <= 0){
        throw new Error("No Order Items");
    }
    //Place /create order - save into DB:
    const order = await Order.create({
        user: user?._id,
        orderItems,
        shippingAddress,
        totalPrice,
    });
    console.log(order);
    
    

    //Update the product qty
    const products = await Product.find({_id:{$in:orderItems}});
    console.log(products);
    orderItems?.map(async(order) => {
        const product = products?.find((product) => {
            return product?._id === order?._id.toString();
        });
        if(product){
            product.totalPrice += order.qty;
        }
        await  product.save();
    });

    //Push Order into user
    user.orders.push(order?._id);
    await user.save();

    //make payment (stripe)
    //Payment Webhook
    //Update the user Order

    res.json({
        success: true,
        message: "Order created",
        order,
        user,
    })
});