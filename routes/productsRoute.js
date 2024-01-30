import  express  from "express";
import { createProductController, 
    getProductController, 
    getProductsController , 
    getProductController, 
    updateProductController,
    updateProductController,
    deleteProductController} from "../controllers/productController";
import { isLoggedIn } from "../middlewares/isLoggedIn";



const productsRouter = express.Router();

userRoutes.post("/" , isLoggedIn , createProductController);
userRoutes.get("/" , getProductsController);
userRoutes.get("/:id" , getProductController);
userRoutes.put("/:id" , isLoggedIn ,updateProductController);
userRoutes.delete("/:id/delete" , isLoggedIn ,deleteProductController);

export default productsRouter;


