import { SubscriberModel } from '../../dataBase/subsriber.db';

function addEmail(email: string) {
  const newEmail = new SubscriberModel({ email });
  return newEmail.save();
}

export default { addEmail };
