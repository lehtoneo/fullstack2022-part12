const { redisMiddleware } = require('../middleware');
const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();

router.use('*', redisMiddleware);

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  const { redis } = req;
  const addedTodos = await redis.getAsync("added_todos");
  const newAddedTodos = Number(addedTodos) + 1;
  await redis.setAsync("added_todos", newAddedTodos);
  res.send(todo);
});

const singleRouter = express.Router();


const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  const { todo } = req;
  res.send(todo);
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const { todo } = req;
  const { text, done } = req.body;
  todo.text = text || todo.text;
  todo.done = done || todo.done;
  const updated = await todo.save();
  res.send(updated); 
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
