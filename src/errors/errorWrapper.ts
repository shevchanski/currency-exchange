import { NextFunction, Request, Response } from 'express';
import { ErrorWrapperCallback } from '../types/global.types';

const errorWrapper =
  (callback: ErrorWrapperCallback) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await callback(req, res, next);
    } catch (e) {
      next(e);
    }
  };

export default errorWrapper;
