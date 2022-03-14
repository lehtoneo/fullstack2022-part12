const { redisMiddleware } = require('../middleware');
const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();

router.use('*', redisMiddleware);

router.get('/', async (req, res) => {
  const { redis } = req;
  const addedTodos = await redis.getAsync("added_todos");
  const result = {
    added_todos: Number(addedTodos)
  };

  res.send(result);
});


module.exports = router;