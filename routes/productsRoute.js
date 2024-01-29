import  express  from "express";
import { createProductController, getProductController, getProductsController , getProductController } from "../controllers/productController";
import { isLoggedIn } from "../middlewares/isLoggedIn";



const productsRouter = express.Router();

userRoutes.post("/" , isLoggedIn , createProductController);
userRoutes.get("/" , getProductsController);
userRoutes.get("/:id" , getProductController);

export default productsRouter;


