import { Request, Response } from 'express';

import resStatus from '../../../configs/resStatus.config';
import errorWrapper from '../../../errors/errorWrapper';
import { getActualCurrencyRate } from '../../../services/getCurrencyRate.service';

const returnUsdToUahRate = errorWrapper(async (req: Request, res: Response) => {
  const actualRate = await getActualCurrencyRate('USD', 'UAH');

  res.status(resStatus.OK).json(actualRate).send();
});

export default returnUsdToUahRate;
