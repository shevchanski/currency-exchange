import joi from 'joi';
import { EmailValidator } from '../../validators/common.validator';

export const SubscribeBodyValidator = joi
  .object({
    email: EmailValidator
  })
  .required();
