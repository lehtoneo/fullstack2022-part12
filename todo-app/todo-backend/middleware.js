const redis = require('./redis')

const redisMiddleware = async (req, _, next) => {
  req.redis = redis;

  next()
};

module.exports = {
  redisMiddleware
}