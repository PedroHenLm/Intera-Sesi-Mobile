import type { Request, Response } from 'express';
import type { UploadedFile } from 'express-fileupload';
import { closeService } from '../services/close.service.js';
import { BadRequestError } from '../utils/http-error.js';

export const closeController = {
  async close(req: Request, res: Response): Promise<void> {
    const { observation, id_req, id_user, date } = req.body;

    let img: Buffer | undefined;
    const file = req.files?.img;
    if (file) {
      if (Array.isArray(file)) throw new BadRequestError('Only one image is allowed');
      img = (file as UploadedFile).data;
    }

    const closed = await closeService.close({
      id_req,
      id_user,
      date,
      ...(observation !== undefined ? { observation } : {}),
      ...(img !== undefined ? { img } : {}),
    });
    res.status(201).json({ data: closed });
  },
};