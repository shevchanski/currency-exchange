import { NextFunction, Response } from 'express';

import resStatus from '../../../configs/resStatus.config';
import { SubscriberModel } from '../../../dataBase/subsriber.db';
import APIError from '../../../errors/APIError';
import errorWrapper from '../../../errors/errorWrapper';
import { IRequest } from '../../../types/global.types';

const checkEmailDuplicate = errorWrapper(
  async (req: IRequest, res: Response, next: NextFunction) => {
    const emailToSubscribe = req.locals?.validatedEmail;

    const isSubscribed = await SubscriberModel.findOne({
      email: emailToSubscribe
    });

    if (isSubscribed) {
      throw new APIError(resStatus.CONFLICT, 'Email is already subscribed');
    }

    next();
  }
);

export default checkEmailDuplicate;
