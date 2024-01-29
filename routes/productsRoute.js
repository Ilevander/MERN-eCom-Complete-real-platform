import  express  from "express";
import { createProductController, getProductsController } from "../controllers/productController";
import { isLoggedIn } from "../middlewares/isLoggedIn";



const productsRouter = express.Router();

userRoutes.post("/" , isLoggedIn , createProductController);
userRoutes.get("/" , isLoggedIn , getProductsController);

export default productsRouter;


