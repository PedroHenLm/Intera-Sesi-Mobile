import { Router } from "express";
import { countController } from "../controllers/count.controller.js";
import { validate } from "../middlewares/validate.js";
import { createCountSchema } from "../validators/count.validator.js";

export const countRouter = Router();

countRouter.get('/', countController.list)

countRouter.get('/:id', countController.getById)

countRouter.post('/',validate(createCountSchema) ,countController.create)