import serverConfig from './server.config';

enum GlobalRoutes {
  RATE = '/rate',
  SUBSCRIBE = '/subscribe'
}

const exchangeAPI = {
  ULR: 'https://api.currencybeacon.com/v1/',
  KEY: process.env.EXCHANGE_API_KEY
};

const DB_Config = {
  RootURL: `${serverConfig.DB_URL}/exchangeCurrency`,
  TestURL: `${serverConfig.DB_URL}/exchangeCurrency-test`
};

export { DB_Config, GlobalRoutes, exchangeAPI };
