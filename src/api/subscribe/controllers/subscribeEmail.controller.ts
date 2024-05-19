import { Response } from 'express';
import resStatus from '../../../configs/resStatus.config';
import APIError from '../../../errors/APIError';
import errorWrapper from '../../../errors/errorWrapper';
import { IRequest } from '../../../types/global.types';
import subscribeService from '../subscribe.service';

const subscribeEmail = errorWrapper(async (req: IRequest, res: Response) => {
  const email = req.locals?.validatedEmail;

  if (!email) {
    throw new APIError(
      resStatus.INTERNAL_ERROR,
      'Internal error happened! Contact support: support@help.com'
    );
  }

  await subscribeService.addEmail(email);

  res.status(resStatus.OK).json();
});

export default subscribeEmail;
