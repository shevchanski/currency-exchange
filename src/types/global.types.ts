import { NextFunction, Request, Response } from 'express';
interface IRequest extends Request {
  locals?: {
    validatedEmail?: string;
  }; // eslint-disable-line @typescript-eslint/no-explicit-any
}

type Controller = (req: IRequest, res: Response) => Promise<void> | void;

type Middleware = (
  req: IRequest,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

type ErrorWrapperCallback = Controller | Middleware;

export { Controller, ErrorWrapperCallback, IRequest, Middleware };
