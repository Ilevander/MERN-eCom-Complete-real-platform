import  express  from "express";
import { createProductController } from "../controllers/productController";
import { isLoggedIn } from "../middlewares/isLoggedIn";



const productsRouter = express.Router();

userRoutes.post("/" , isLoggedIn , createProductController);


export default productsRouter;


