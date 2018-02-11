const express = require("express")
const app = express()

const todos = [
  { "1": "get coffee" },
  { "2": "drink coffee" },
  { "3": "get more coffee" }
]

// curl 'http://localhost:8080/'

app.get("/", (req, res) => {
  res.status(200).send("boo")
})

// curl 'http://localhost:8080/todos'

app.get("/todos", (req, res) => {
  res.status(200).send(todos)
})

// curl 'http://localhost:8080/todo/2'

app.get("/todo/:id", (req, res) => {
  res.status(200).send(todos[req.params.id])
})

// curl -X POST 'http://localhost:8080/todos/5'

app.post("/todos/:id", (req, res) => {
  todos.push(req.params.id)
  res.status(200).send(todos)
})

app.listen(8080)
