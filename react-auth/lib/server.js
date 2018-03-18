const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = 8080;

const app = express();
app.use(bodyParser.json());

const uri = "mongodb://localhost:27017/auth";
mongoose.connect(uri);


const User = require("./models/user")

app.post("/signup", (req, res) => {
  // get the email and password from the request body
  const { email, password } = req.body;
  // create a new instance of the user model
  const user = new User({
    email,
    password
  });
  // save it
  user
    .save()
    .then(doc => {
      // if successful, send back user
      res.status(200).json({
        message: "success",
        payload: doc
      });
    })
    .catch(err => {
      // if unsuccessful, send back error
      res.status(500).json({ message: err.message });
    });
});

app.post("/login", (req, res) => {
  // retrieve user and password from body
  const { email, password } = req.body;
  // find a matching user in our db by email addres
  User.findOne({ email }).then(user => {
    // check the password the user provided against the password in the db
    if (user && user.password === password) {
      // if they match, send back the user
      res.status(200).json({
        message: "success",
        payload: user
      });
    } else {
      // if they don't match, send back a 401
      res.status(401).json({
        message: "unauthorized"
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
