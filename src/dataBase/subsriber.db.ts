import { getModelForClass, prop } from '@typegoose/typegoose';
import { EmailValidator } from '../validators/common.validator';

class Subscriber {
  @prop({
    type: () => String,
    required: true,
    unique: true,
    validate: (data: string) => EmailValidator.validate(data),
    lowercase: true
  })
  public email!: string;
}

export const SubscriberModel = getModelForClass(Subscriber);
