import express from "express";
import { createCategoryController , getAllCategoriesController , getSingleCategoryController , updateCategoryController , deleteCategoryController } from "../controllers/categoriesController.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";


const categoriesRouter = express.Router();


categoriesRouter.post("/", isLoggedIn ,createCategoryController);
categoriesRouter.get("/", getAllCategoriesController);
categoriesRouter.get("/:id", getSingleCategoryController);
categoriesRouter.delete("/:id",deleteCategoryController);
categoriesRouter.put("/:id" ,updateCategoryController);



export default categoriesRouter;