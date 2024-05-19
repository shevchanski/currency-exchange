import { NextFunction, Request, Response } from 'express';

import APIError from './APIError';

/*eslint-disable @typescript-eslint/no-unused-vars*/
const errorHandler = (
  error: APIError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { status, message, subCode } = error;
  res.status(status ?? 500).json({ errorMessage: message, subCode });
};

export default errorHandler;
