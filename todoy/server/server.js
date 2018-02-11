const express = require("express")
const app = express()

const todos = [
  { "1": "get coffee" },
  { "2": "drink coffee" },
  { "3": "get more coffee" }
]

// curl -X GET 'http://localhost:8080/'

app.get("/", (req, res) => {
  res.status(200).send("boo")
})

// curl -X GET 'http://localhost:8080/todos'

app.get("/todos", (req, res) => {
  res.status(200).json({
    success: true,
    todos: todos
  })
})

// curl -X GET 'http://localhost:8080/todo/2'

app.get("/todo/:id", (req, res) => {
  res.status(200).json({
    success: true,
    todos: todos[req.params.id]
  })
})

// curl -X POST 'http://localhost:8080/todos/5'

app.post("/todos/:id", (req, res) => {
  todos.push(req.params.id)
  res.status(200).json({
    success: true,
    todos: todos
  })
})

// curl -X DELETE 'http://localhost:8080/todos/5'

app.delete("/todos/:id", (req, res) => {
  let removed = todos.splice(req.params.id)

  if (removed.length === 0) {
    res.status(404).json({
      success: false,
      message: "error!!!!"
    })
  }

  res.status(200).json({
    success: true,
    todos: removed
  })
})

app.listen(8080)
