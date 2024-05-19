import { NextFunction, Request, Response } from 'express';

type Controller = (req: Request, res: Response) => Promise<void> | void;

type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

type ErrorWrapperCallback = Controller & Middleware;

export { Controller, ErrorWrapperCallback, Middleware };
