import axios from 'axios';
import { exchangeAPI } from '../configs/global.config';
import resStatus from '../configs/resStatus.config';
import APIError from '../errors/APIError';

export const getActualCurrencyRate = async (
  baseCurrency: string,
  symbols: string
) => {
  if (!exchangeAPI.KEY) {
    throw new APIError(resStatus.INTERNAL_ERROR, 'API-key is not defined.');
  }

  const url_rateUSDtoUAH =
    exchangeAPI.ULR +
    'latest?api_key=' +
    exchangeAPI.KEY +
    `&base=${baseCurrency}&symbols=${symbols}`;

  const response = await axios.get(url_rateUSDtoUAH);

  return response.data?.rates?.UAH;
};
