import  express  from "express";
import { loginUserController,
         registerUserController,
         getUserProfileController,
         updateShippingAddressController,  
         } from "../controllers/usersController.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";


const userRoutes = express.Router();

userRoutes.post("/register" , registerUserController);//Registration
userRoutes.post("/login" , loginUserController);//Login
userRoutes.get("/profile" , isLoggedIn, getUserProfileController);
userRoutes.put("/update/shipping" , isLoggedIn, updateShippingAddressController);



export default userRoutes;


