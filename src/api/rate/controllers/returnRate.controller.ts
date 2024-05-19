import axios from 'axios';
import { Request, Response } from 'express';

import { exchangeAPI } from '../../../configs/global.config';
import resStatus from '../../../configs/resStatus.config';
import APIError from '../../../errors/APIError';
import errorWrapper from '../../../errors/errorWrapper';

const returnUsdToUahRate = errorWrapper(async (req: Request, res: Response) => {
  if (!exchangeAPI.KEY) {
    throw new APIError(resStatus.INTERNAL_ERROR, 'API-key is not defined.');
  }

  const url_rateUSDtoUAH =
    exchangeAPI.ULR +
    'latest?api_key=' +
    exchangeAPI.KEY +
    '&base=USD&symbols=UAH';

  const response = await axios.get(url_rateUSDtoUAH);

  res.status(resStatus.OK).json(response.data?.rates?.UAH).send();
});

export default returnUsdToUahRate;
