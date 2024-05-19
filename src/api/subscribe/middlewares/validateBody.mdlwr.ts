import { NextFunction, Response } from 'express';

import resStatus from '../../../configs/resStatus.config';
import APIError from '../../../errors/APIError';
import errorWrapper from '../../../errors/errorWrapper';
import { IRequest } from '../../../types/global.types';
import { SubscribeBodyValidator } from '../subscribe.validator';

const validateBody = errorWrapper(
  (req: IRequest, res: Response, next: NextFunction) => {
    const { body } = req;

    const { error, value: validatedBody } =
      SubscribeBodyValidator.validate(body);

    if (error) {
      throw new APIError(resStatus.BAD_REQUEST, error.message);
    }

    req.locals = {
      ...req.locals,
      validatedEmail: validatedBody.email
    };

    next();
  }
);

export default validateBody;
