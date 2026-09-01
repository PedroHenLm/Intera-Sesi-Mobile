import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';
import { validate } from '../middlewares/validate.js';
import { createUserSchema, updateUserSchema, UserLogin } from '../validators/user.validator.js';

export const userRouter = Router();

userRouter.get('/', userController.list);

userRouter.get('/:id', userController.getById)

userRouter.post('/',validate(createUserSchema), userController.create)

userRouter.delete('/:id', userController.delete)

userRouter.patch('/:id', validate(updateUserSchema, 'body'), userController.update)

userRouter.post('/login', validate(UserLogin), userController.login)