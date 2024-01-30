import Review from "../model/Review";
import Product from "../model/Product.js";
import asyncHandler from "express-async-handler";

// @desc  Create new review
// @route POST /api/v1/reviews
// @access Private/Admin

export const createReviewController = asyncHandler(async(req,res) => {
    const {product , message , rating } = req.body;
    //1. Find the Product 
    console.log(req.params);
    const { productID } = req.params;
    const productFound = await Product.findById(productID).populate('reviews');
    console.log(productFound);
    if(!productFound){
        throw new Error('Product Not Found');
    }
    //check if user already reviewed 
    const hasReviewed = productFound?.reviews?.find((review) => {
        console.log(review);
        return review?.user?.toString()  ===  req?.userAuthId
    });
    if(hasReviewed){
        throw new Error("You have already reviewed this product");
    }
    console.log(hasReviewed);
    //create review:
    const review = await Review.create({
        message,
        rating,
        product: productFound?._id,
        user: req.userAuthId,
    });
    //push review into product found
    productFound.reviews.push(review?._id);
    //re-save
    await productFound.save();
    res.status(201).json({
        success: true,
        message: "Review created successfully",
    });
    // res.json({
    //     msg: "Review Controller",
    // });
});