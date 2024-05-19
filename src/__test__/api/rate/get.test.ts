import supertest from 'supertest';

import app from '../../../app';
import { GlobalRoutes } from '../../../configs/global.config';

describe('GET rate', () => {
  test('200 | return exchange rate', async () => {
    const response = await supertest(app).get(GlobalRoutes.RATE);

    expect(response.status).toBe(200);
    expect(typeof response.body).toBe('number');
  });
});
