require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUrl: process.env.MONGO_URL,
  dbName: process.env.MONGO_DB_NAME,
  testDbUrl: process.env.TEST_MONGO_URL,
  testDbName: process.env.TEST_MONGO_DB_NAME,
};

module.exports = { config };
