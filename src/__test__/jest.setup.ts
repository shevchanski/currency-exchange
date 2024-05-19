import mongoose from 'mongoose';

beforeAll(async () => {
  const dbURL =
    process.env.TEST_DB_URL ||
    'mongodb://127.0.0.1:27017/exchangeCurrency-test';

  //   mongoose.set({ debug: true });
  await mongoose.connect(dbURL);
});

afterAll(async () => {
  await mongoose.disconnect();
});
