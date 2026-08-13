import { Router } from 'express';
import { taskController } from '../controllers/task.controller.js';
import { validate } from '../middlewares/validate.js';
import {taskIdSchema, createTaskSchema,  updateTaskSchema } from '../validators/task.validator.js';

export const taskRouter = Router();

taskRouter.get('/listTask', taskController.list);

taskRouter.get('/listTask/:id', validate(taskIdSchema, 'params'), taskController.getById);

taskRouter.post('/newTask', validate(createTaskSchema, 'params'), taskController.create);

taskRouter.patch('/updateTask', validate(updateTaskSchema, 'params'));

taskRouter.delete('/deleteTask', taskController.remove);
