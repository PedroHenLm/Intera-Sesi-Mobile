import type { NextFunction, Request, Response } from 'express';
import type { ZodTypeAny } from 'zod';
import { BadRequestError } from '../utils/http-error.js';

type ValidationTarget = 'body' | 'params' | 'query';

export const validate = (schema: ZodTypeAny, target: ValidationTarget = 'body') => {
  return (req: Request, _res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req[target]);

    if (!result.success) {
      const message = result.error.errors.map((err) => err.message).join(', ');
      next(new BadRequestError(message));
      return;
    }

    req[target] = result.data;
    next();
  };
};
