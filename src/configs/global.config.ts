enum GlobalRoutes {
  RATE = '/rate',
  SUBSCRIBE = '/subscribe'
}

const exchangeAPI = {
  ULR: 'https://api.currencybeacon.com/v1/',
  KEY: process.env.EXCHANGE_API_KEY
};

export { GlobalRoutes, exchangeAPI };
