module.exports = {
    HOST: "db",
    USER: "postgres",
    PASSWORD: "pgdb@1234",
    DB: "postgres",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };