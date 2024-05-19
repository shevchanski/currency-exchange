import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';

dotenv.config({ path: path.join(process.cwd(), '.env.example') });

import rateRouter from './api/rate/rate.router';
import subscribeRouter from './api/subscribe/subscribe.router';
import { DB_Config, GlobalRoutes } from './configs/global.config';
import serverConfig from './configs/server.config';
import errorHandler from './errors/errorHandler';

if (process.env.NODE_ENV !== 'test') {
  mongoose.set({ debug: true });
  mongoose.connect(DB_Config.RootURL);
}

const app = express();

// high-level middleware to parse request's json-body
app.use(express.json());

// define what router will handle routes on '/rate'
app.use(GlobalRoutes.RATE, rateRouter);

// define what router will handle routes on '/subscribe'
app.use(GlobalRoutes.SUBSCRIBE, subscribeRouter);

// next line we define to use as global mdlwr to handle all errors
app.use(errorHandler);

if (process.env.NODE_ENV !== 'test') {
  app.listen(serverConfig.PORT, () => {
    //   eslint-disable-next-line no-console
    console.log(
      `Server listening on port: ${serverConfig.PORT}\n Access server on http://localhost:${serverConfig.PORT}`
    );
  });
}

export default app;
