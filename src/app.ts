import dotenv from 'dotenv';
import express from 'express';
import path from 'node:path';

dotenv.config({ path: path.join(process.cwd(), '.env.example') });

import serverConfig from './configs/server.config';
import errorHandler from './errors/errorHandler';

const app = express();

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
