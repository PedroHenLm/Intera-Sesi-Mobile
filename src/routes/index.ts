import { Router } from 'express';
import { taskRouter } from './task.routes.js';
import { userRouter } from './user.routes.js';

export const router = Router();

/**
 * @openapi
 * /health:
 *   get:
 *     tags: [Health]
 *     summary: Health check
 *     responses:
 *       200:
 *         description: API is up
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 */
router.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

router.use('/tasks', taskRouter);

router.use('/users', userRouter)
