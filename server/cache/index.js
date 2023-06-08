const { createClient } = require("redis");
const config = require("./config");

const { host, port, username, password } = config;

const redisClient = createClient({
  socket: { host, port },
  username,
  password,
});

(async () => {
  redisClient.on("error", (err) => console.log(`Error connecting to redis: `, err));

  await redisClient.connect();
})();

module.exports = redisClient;
