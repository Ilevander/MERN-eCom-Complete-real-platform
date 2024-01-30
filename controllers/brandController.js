import Brand from "../model/Brand.js";
import asyncHandler from "express-async-handler"


// @desc Create new brand
// @route POST /api/v1/brands
// @access Private/Admin
export const createBrandController = asyncHandler(async (req,res) => {
    const  {name}= req.body;
    //category exists
    const brandFound = await Brand.findOne({name})
    if(brandFound){
        throw new Error('Brand already exists');
    }
    //create
    const brand = await Brand.create({
        name: name.toLowerCase(),
        user: req.userAuthId,
    });

    res.json({
        status: "success",
        message: "Brand created successfully",
        brand,
    })
});


// @desc Get all brands
// @route GET /api/brands
// @access Public
export const getAllBrandsController = asyncHandler(async (req,res) => {
    const brands = await Brand.find();

    res.json({
        status: "success",
        message: "Brands fetched successfully",
        brands,
    })
});

// @desc Get single Brand
// @route GET /api/brands/:id
// @access Public
export const getSingleBrandController = asyncHandler(async (req,res) => {
    const brand = await Brand.findById(req.params.id);

    res.json({
        status: "success",
        message: "Brand fetched successfully",
        brand,
    })
});


// @desc Update brands
// @route PUT  /api/brands/:id/update
// @access Private/Admin
export const updateBrandController = asyncHandler(async(req,res) => {
    const { name} = req.body;

    //update
    const brand = await Brand.findByIdAndUpdate(
    req.params.id ,  
        {
            name
        },
        {
        new: true,
        }
    );
    res.json({
        status: "success",
        message: "Brand updated successfully",
        brand,
    });  
});


// @desc delete category
// @route DELETE  /api/categories/:id/delete
// @access Private/Admin
export const deleteBrandController = asyncHandler (async(req,res) => {
    await Brand.findByIdAndDelete(req.params.id) ;
    res.json({
        status: "success",
        message: "Brand deleted successfully",
      });
   
});