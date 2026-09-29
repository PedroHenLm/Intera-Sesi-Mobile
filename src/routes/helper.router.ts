import { Router } from "express";
import { helperController } from "../controllers/helper.controller.js";


export const helperRouter = Router()

helperRouter.get('/', helperController.getRoles)