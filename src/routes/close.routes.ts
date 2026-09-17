import { Router } from "express";
import { validate } from "../middlewares/validate.js";
import { doClose } from "../validators/close.validator.js";
import { closeController } from "../controllers/close.controller.js";
import { taskController } from "../controllers/task.controller.js";

export const closeRouter = Router();

closeRouter.post("/close", validate(doClose, 'body'), closeController.close)