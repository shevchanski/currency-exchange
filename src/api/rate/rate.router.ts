import express from 'express';

import returnUsdToUahRate from './controllers/returnRate.controller';

const router = express.Router();

router.get('/', returnUsdToUahRate);

export default router;
