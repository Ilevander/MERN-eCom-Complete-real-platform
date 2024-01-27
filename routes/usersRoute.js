import  express  from "express";
import { loginUserController, registerUserController , getUserProfileController } from "../controllers/usersController.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";


const userRoutes = express.Router();

userRoutes.post("/register" , registerUserController);//Registration
userRoutes.post("/login" , loginUserController);//Login
userRoutes.post("/profile" , isLoggedIn, getUserProfileController);


export default userRoutes;


