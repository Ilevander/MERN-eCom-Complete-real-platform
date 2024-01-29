import  express  from "express";
import { createProductController, 
    getProductController, 
    getProductsController , 
    getProductController, 
    updateProductController,
    updateProductController,
    deleteProductController , 
    deleteProductController} from "../controllers/productController";
import { isLoggedIn } from "../middlewares/isLoggedIn";
deleteProductController


const productsRouter = express.Router();

userRoutes.post("/" , isLoggedIn , createProductController);
userRoutes.get("/" , getProductsController);
userRoutes.get("/:id" , getProductController);
userRoutes.get("/:id" , isLoggedIn ,updateProductController);
userRoutes.delete("/:id/delete" , isLoggedIn ,deleteProductController);

export default productsRouter;


