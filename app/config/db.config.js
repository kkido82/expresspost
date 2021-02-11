module.exports = {
    HOST: process.env.DB_HOST || "localhost",
    USER: process.env.DB_USER_NAME || "postgres",
    PASSWORD: process.env.DB_PASS || "Aa123456",
    DB: process.env.DB_NAME || "testdb",
    PORT: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };