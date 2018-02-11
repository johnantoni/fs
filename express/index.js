const express = require("express")
const cors = require("cors")
const app = express()

// app.use(cors)

app.get('/', (req, res) => {
  res.send("hello all")
})

// curl 'http://localhost:8080/reverse/apple'

app.get('/reverse/:name', (req, res) => {
  console.log(req.params)
  let name = req.params.name;
  const reversed = name.split('').reverse().join('')
  res.status(200).json({
    success: true,
    message: reversed
  })
})

app.listen(8080)

console.log("server started and listening on port 8080")
