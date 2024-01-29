import asyncHandler from "express-async-handler";
import Product from "../model/Product.js";


// @desc   Create new product
// @route POST/api/v1/products
// @access Private/Admin

export const createProductController = asyncHandler

    (async(req,res) => {
    const {name,description,category,sizes,colors,user,price,totalQty,brand} 
       = req.body;
     //Product exists:
     const productExists = await Product.findOne({ name });
     if(productExists)
         {
            throw new Error ("Product Already Exists");
         }
       //create the product 
       const product = await Product.create({
        name,
        description,
        category,
        sizes,
        colors,
        user: req.userAuthId,
        price,
        totalQty,
        brand,
       });  
      //Push the product into the category
      //send response
      res.json({
        status: "success",
        message: "Product created successfully",
        product,
      });
});

// @desc Get all products
// @route GET /api/v1/products
// @access Public

export const getProductsController = asyncHandler(async(req,res) => {
    console.log(req.query);
    //query
    let productQuery = Product.find();

    console.log(products);
    
    //filter by name
    if(req.query.name){
        productQuery = productQuery.find({
            name: { $regex : req.query.name, $options : "i"},
        });
    }

    //filter by brand
    if(req.query.brand){
        productQuery = productQuery.find({
            brand: { $regex : req.query.brand, $options : "i"},
        });
    }

    //filter by category
    if(req.query.category){
        productQuery = productQuery.find({
            category: { $regex : req.query.category, $options : "i"},
        });
    }

    //filter by color
    if(req.query.colors){
        productQuery = productQuery.find({
            colors: { $regex : req.query.colors, $options : "i"},
        });
    }

    //filter by size
    if(req.query.sizes){
        productQuery = productQuery.find({
            sizes: { $regex : req.query.sizes, $options : "i"},
        });
    }
    //filter by price range 
    if(req.query.price){
        const priceRange = req.query.price.split("-");
        //gte : greater or equal
        //lte : less than or equal to
        productQuery = productQuery.find({
            price:{$gte: priceRange[0], $lte: priceRange[1]},
        });
    }


    //await the query:
    const products = await productQuery;

    res.json({
        status: "success",
        products,
    });
});


