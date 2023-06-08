require("dotenv").config();

module.exports = {
  host: process.env.REDIS_HOST || "localhost",
  port: process.env.REDIS_PORT || "4001",
  username: process.env.REDIS_USERNAME || "rakib",
  password: process.env.REDIS_PASSWORD || "123456",
};
