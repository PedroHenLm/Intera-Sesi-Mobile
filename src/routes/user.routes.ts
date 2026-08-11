import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';

export const userRouter = Router();

userRouter.get('/listUser', userController.list);