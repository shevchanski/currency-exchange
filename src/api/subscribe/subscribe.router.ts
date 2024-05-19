import express from 'express';

import subscribeEmail from './controllers/subscribeEmail.controller';
import checkEmailDuplicate from './middlewares/checkEmailDuplicate.mdlwr';
import validateBody from './middlewares/validateBody.mdlwr';

const router = express.Router();

router.post('/', validateBody, checkEmailDuplicate, subscribeEmail);

export default router;
