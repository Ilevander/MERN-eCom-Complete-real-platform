import express from "express";
import { createCategoryController , getAllCategoriesController , getSingleCategoryController , updateCategoryController , deleteCategoryController } from "../controllers/categoriesController.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";


const categoriesRouter = express.Router();


categoriesRouter.post("/", isLoggedIn ,createCategoryController);
categoriesRouter.get("/", getAllCategoriesController);
categoriesRouter.post("/:id", getSingleCategoryController);
categoriesRouter.post("/:id",deleteCategoryController);
categoriesRouter.post("/:id" ,updateCategoryController);



export default categoriesRouter;