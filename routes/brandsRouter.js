import express from "express";
import { createBrandController , getAllBrandsController , getSingleBrandController , updateBrandController , deleteBrandController } from "../controllers/brandController.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";


const brandsRouter = express.Router();


brandsRouter.post("/", isLoggedIn ,createBrandController);
brandsRouter.get("/", getAllBrandsController);
brandsRouter.get("/:id", getSingleBrandController);
brandsRouter.delete("/:id",deleteBrandController);
brandsRouter.put("/:id" ,updateBrandController);



export default brandsRouter;