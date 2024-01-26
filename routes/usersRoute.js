import  express  from "express";
import { loginUserController, registerUserController , getUserProfileController } from "../controllers/usersController.js";

const userRoutes = express.Router();

userRoutes.post("/register" , registerUserController);//Registration
userRoutes.post("/login" , loginUserController);//Login
userRoutes.post("/profile" , getUserProfileController);


export default userRoutes;


