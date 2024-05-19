import express from 'express';

import resStatus from '../../configs/resStatus.config';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(resStatus.OK).send();
});

export default router;
