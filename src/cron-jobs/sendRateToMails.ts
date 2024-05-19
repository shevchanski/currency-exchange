import { SubscriberModel } from '../dataBase/subsriber.db';
import { getActualCurrencyRate } from '../services/getCurrencyRate.service';
import { sendMail } from '../services/sendMail.service';

export const sendRateToMails = async () => {
  const allMails = (await SubscriberModel.find()).reduce(
    (acc: string[], value) => {
      acc.push(value.toObject().email);
      return acc;
    },
    []
  );

  const actualRate = await getActualCurrencyRate('USD', 'UAH');

  await sendMail(allMails, actualRate);
};
