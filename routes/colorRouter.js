import express from "express";
import { createColorController , getAllColorsController , getSingleColorController , updateColorController , deleteColorController } from "../controllers/colorsController.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";


const colorRouter = express.Router();


colorRouter.post("/", isLoggedIn ,createColorController);
colorRouter.get("/", getAllColorsController);
colorRouter.get("/:id", getSingleColorController);
colorRouter.delete("/:id",deleteColorController);
colorRouter.put("/:id" ,updateColorController);



export default colorRouter;