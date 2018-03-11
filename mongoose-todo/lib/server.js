const express = require("express");
const PORT = 8080;
const app = express();

const mongoose = require('mongoose')

const uri = 'mongodb://localhost:27017/todoApp'
mongoose.connect(uri)

const Todo = require('../models/todo')
// const todos = [];

app.get("/todos", (req, res) => {
  // get all todos
  Todo.find({})
    .then(docs => {
      //send back a list of all todos
      res.status(200).send({ message: "Success", payload: docs });
    })
    .catch(err => {
      // if can't find todos for some reason, send error
      res.status(500).send({ message: err.message });
    });
});

app.post("/todos/:todo", (req, res) => {
  // instantiate new todo model
  const todo = new Todo({
    description: req.params.todo
  });
  // save new todo model
  todo
    .save()
    .then(doc => {
      // send back successful todo saved into db
      res.status(201).json({ message: "Success", payload: doc });
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

app.put("/todos/:index/:nextTodo", (req, res) => {
  const { index, nextTodo } = req.params;
  let todo = todos[index];

  if (todo) {
    todos[index] = nextTodo;
    res.status(200).json({ todo: todos[index] });
  } else {
    res.status(404).json({
      message: "The todo does not exist."
    });
  }
});

app.delete("/todos/:id", (req, res) => {
  // swap :index to :id
  const id = req.params.id;

  // find the matching todo and remove it
  Todo.findByIdAndRemove({ _id: id })
    .then(doc => {
      // if successfull, send success message
      res
        .status(200)
        .send({
          message: "success",
          payload: doc
        })
    })
    .catch(err => {
      // if error, send error
      res.status(500).send({
        message: err.message
      });
    });
});

app.patch("/todos/:id/complete", (req, res) => {
  // find Todo by id
  const { id } = req.params;
  // if found update the value of completed to be true
  Todo.findByIdAndUpdate(id, { completed: true })
    // send back successful todo
    .then(doc => {
      res.status(200).json({
        message: "success",
        payload: doc
      });
    })
    .catch(err => {
      // if error, send back error
      res.status(500).json({
        message: err.message
      });
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
