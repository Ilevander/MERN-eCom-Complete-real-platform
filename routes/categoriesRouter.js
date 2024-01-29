import express from "express";
import { createCategoryController } from "../controllers/categoriesController.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";


const categoriesRouter = express.Router();


categoriesRouter.post("/", isLoggedIn ,createCategoryController);



export default categoriesRouter;