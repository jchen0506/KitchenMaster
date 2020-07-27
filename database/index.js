const redis = require('redis');
const client = redis.createClient();

client.on('error', function (error) {
  console.error(error);
});

module.exports = client;
