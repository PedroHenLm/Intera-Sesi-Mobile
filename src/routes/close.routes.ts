import { Router } from "express";
import { validate } from "../middlewares/validate.js";
import { doClose } from "../validators/close.validator.js";
import { closeControler } from "../controllers/close.controller.js";
import { taskController } from "../controllers/task.controller.js";

export const close = Router();

close.post("/close", validate(doClose, 'body'), taskController.create)