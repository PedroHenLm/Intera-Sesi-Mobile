import { Router } from "express";
import { validate } from "../middlewares/validate.js";
import { roomControler } from "../controllers/room.controller.js";


export const roomRouter = Router()

roomRouter.get("/", roomControler.list)