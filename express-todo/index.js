const express = require("express")
const app = express()
const PORT = 8080

const todos = [];

// get
// curl -X GET "http://localhost:8080/todos"
app.get('/todos', (req, res) => {
  res
    .status(200)
    .json({ todos : todos })
})

// post
// curl -X POST "http://localhost:8080/todos/bacon"
app.post('/todos/:todo', (req, res) => {
  const todo = req.params.todo
  todos.push(todo)
  res
    .status(200)
    .json({ todos : todos })
})

// put
// curl -X PUT "http://localhost:8080/todos/0/cheese"
app.put('/todos/:index/:todo', (req, res) => {
  const index = req.params.index
  const todo = req.params.todo
  todos[index] = todo
  res
    .status(200)
    .json({ todos : todos })
})


// delete
// curl -X DELETE "http://localhost:8080/todos/0"
app.delete('/todos/:index', (req, res) => {
  const index = req.params.index
  todos.splice(index, 1);
  res
    .status(200)
    .json({ todos : todos })
})

app.listen(PORT)

console.log("server started and listening on port 8080")
