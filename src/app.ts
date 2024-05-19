import dotenv from 'dotenv';
import express from 'express';
import path from 'node:path';

dotenv.config({ path: path.join(process.cwd(), '.env.example') });

import serverConfig from './configs/server.config';

const app = express();

app.listen(serverConfig.PORT, () => {
  //   eslint-disable-next-line no-console
  console.log(
    `Server listening on port: ${serverConfig.PORT}\n Access server on http://localhost:${serverConfig.PORT}`
  );
});
