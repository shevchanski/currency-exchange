import joi from 'joi';

export const EmailValidator = joi.string().email().required().lowercase();
