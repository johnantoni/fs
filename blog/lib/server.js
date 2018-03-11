const express = require("express");

const app = express();
const PORT = 8080;

const bodyParser = require('body-parser');
 // ...below const app = express()
app.use(bodyParser.json());
// we can now send requests whose body is JSON

const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/blog";
mongoose.connect(uri);

const Post = require("../models/post");


app.get("/posts", (req, res) => {
  // find all posts
  Post.find()
    .then(docs => {
      // if found, send back a success message with all posts
      res.status(200).json({
        message: "success",
        payload: docs
      });
    })
    .catch(err => {
      // if not found, send back an error code with the error message
      res.status(500).json({
        message: err.message
      });
    });
});

app.post("/post", (req, res) => {
    // grab the title and description from the request body
  const { title, description } = req.body;
  // instantiate a new post with the title and description
  const post = new Post({
    title,
    description
  });
    // save the post
  post.save().then(doc => {
    // if successfull, send back a success code with the new document
    res
      .status(200)
      .json({
        message: "post saved",
        payload: doc
      })
  })
  .catch(err => {
    // if unsuccessful, send back error code with error essage
    res.status(500).json({
      message: err.message
    });
  });
});

app.delete("/post/:post_id", (req, res) => {
  const id = req.params.post_id;
  Post.findByIdAndRemove(id)
    .then(doc => {
      res.status(202).json({
        message: "removed",
        payload: doc
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
