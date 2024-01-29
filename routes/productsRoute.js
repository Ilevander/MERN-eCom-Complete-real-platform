import  express  from "express";
import { createProductController, getProductController, getProductsController , getProductController, updateProductController, updateProductController} from "../controllers/productController";
import { isLoggedIn } from "../middlewares/isLoggedIn";



const productsRouter = express.Router();

userRoutes.post("/" , isLoggedIn , createProductController);
userRoutes.get("/" , getProductsController);
userRoutes.get("/:id" , getProductController);
userRoutes.get("/:id" , isLoggedIn ,updateProductController);

export default productsRouter;


