const express = require("express");
const Todos = require("../models/Todos");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allTodos = await Todos.find();
    res.json(allTodos);
  } catch (err) {
    res.status(404).json({ msg: err });
  }
});

router.post("/", async (req, res) => {
  const todo = new Todos(req.body);
  try {
    const addedTodo = await todo.save();
    res.json(addedTodo);
  } catch (err) {
    res.status(404).json({ msg: err });
  }
});

router.get("/:todoId", async (req, res) => {
  try {
    const todo = await Todos.findById(req.params.todoId);
    res.json(todo);
  } catch (err) {
    res.status(404).json({ msg: err });
  }
});

router.delete("/:todoId", async (req, res) => {
  try {
    const todo = await Todos.findByIdAndDelete(req.params.todoId);
    res.json(todo);
  } catch (err) {
    res.status(404).json({ msg: err });
  }
});

router.patch("/:todoId", async (req, res) => {
  try {
    const todo = await Todos.findByIdAndUpdate(req.params.todoId, req.body);
    res.json(todo);
  } catch (err) {
    res.status(404).json({ msg: err });
  }
});

module.exports = router;
