import { faker } from '@faker-js/faker';
import supertest from 'supertest';

import app from '../../../app';
import { GlobalRoutes } from '../../../configs/global.config';
import resStatus from '../../../configs/resStatus.config';

describe('POST /subscribe', () => {
  test('400 | Send without body ', async () => {
    const response = await supertest(app).post(GlobalRoutes.SUBSCRIBE);

    expect(response.status).toBe(resStatus.BAD_REQUEST);
    expect(typeof response.body).toBe('object');
    expect(response.body).toHaveProperty('errorMessage');
    expect(typeof response.body.errorMessage).toBe('string');
    expect(response.body.errorMessage).toBe('"email" is required');
  });

  test('400 | Send empty object ', async () => {
    const response = await supertest(app).post(GlobalRoutes.SUBSCRIBE).send({});

    expect(response.status).toBe(resStatus.BAD_REQUEST);
    expect(typeof response.body).toBe('object');
    expect(response.body).toHaveProperty('errorMessage');
    expect(typeof response.body.errorMessage).toBe('string');
    expect(response.body.errorMessage).toBe('"email" is required');
  });

  test('200 | Send empty object ', async () => {
    const response = await supertest(app)
      .post(GlobalRoutes.SUBSCRIBE)
      .send({ email: faker.internet.email() });

    expect(response.status).toBe(resStatus.OK);
    //  expect(typeof response.body).toBe('object');
    //  expect(response.body).toHaveProperty('errorMessage');
    //  expect(typeof response.body.errorMessage).toBe('string');
    //  expect(response.body.errorMessage).toBe('Email is added.');
  });

  test('200 | Send twice the same email ', async () => {
    const email = faker.internet.email();

    const firstSubscribe = await supertest(app)
      .post(GlobalRoutes.SUBSCRIBE)
      .send({ email });

    expect(firstSubscribe.status).toBe(resStatus.OK);

    const secondSubscribe = await supertest(app)
      .post(GlobalRoutes.SUBSCRIBE)
      .send({ email });

    expect(secondSubscribe.status).toBe(resStatus.CONFLICT);
    expect(typeof secondSubscribe.body).toBe('object');
    expect(secondSubscribe.body).toHaveProperty('errorMessage');
    expect(typeof secondSubscribe.body.errorMessage).toBe('string');
    expect(secondSubscribe.body.errorMessage).toBe(
      'Email is already subscribed'
    );
  });
});
