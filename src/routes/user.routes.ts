import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';
import { validate } from '../middlewares/validate.js';
import { createUserSchema } from '../validators/user.validator.js';

export const userRouter = Router();

userRouter.get('/listUser', userController.list);

userRouter.get('/listUser:id', userController.getById)

userRouter.post('/newUsuario',validate(createUserSchema), userController.create)

userRouter.delete('/deleteUser:id', userController.delete)