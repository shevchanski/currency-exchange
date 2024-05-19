import express from 'express';

import resStatus from '../../configs/resStatus.config';

const router = express.Router();

router.post('/', (req, res) => {
  res.status(resStatus.OK).json();
});

export default router;
