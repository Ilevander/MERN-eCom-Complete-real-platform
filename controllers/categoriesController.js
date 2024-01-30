import Category from "../model/Category.js";
import asyncHandler from "express-async-handler"


// @desc Create new category
// @route POST /api/v1/categories
// @access Private/Admin
export const createCategoryController = asyncHandler(async (req,res) => {
    const  {name}= req.body;
    //category exists
    const categoryFound = await Category.findOne({name})
    if(categoryFound){
        throw new Error('Category already exists');
    }
    //create
    const category = await Category.create({
        name: name.toLowerCase(),
        user: req.userAuthId,
    });

    res.json({
        status: "success",
        message: "Category created successfully",
        category,
    })
});


// @desc Get all Categories
// @route GET /api/categories
// @access Public
export const getAllCategoriesController = asyncHandler(async (req,res) => {
    const categories = await Category.find();

    res.json({
        status: "success",
        message: "Categories fetched successfully",
        categories,
    })
});

// @desc Get single Category
// @route GET /api/categories/:id
// @access Public
export const getSingleCategoryController = asyncHandler(async (req,res) => {
    const category = await Category.findById(req.params.id);

    res.json({
        status: "success",
        message: "Category fetched successfully",
        category,
    })
});


// @desc Update Categories
// @route PUT  /api/categories/:id/update
// @access Private/Admin
export const updateCategoryController = asyncHandler(async(req,res) => {
    const { name} = req.body;

    //update
    const category = await Category.findByIdAndUpdate(
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
        message: "Category updated successfully",
        category,
    });  
});


// @desc delete category
// @route DELETE  /api/categories/:id/delete
// @access Private/Admin
export const deleteCategoryController = asyncHandler (async(req,res) => {
    await Category.findByIdAndDelete(req.params.id) ;
    res.json({
        status: "success",
        message: "Category deleted successfully",
      });
   
});