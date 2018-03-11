import React, { Component } from "react";
import axios from "axios";
import Post from "./components/Post";

class Blog extends Component {
  state = {
      // our blog posts will be stored here eventually
      posts: []
  };

  refresh = () => {
    // get all block posts from the backend
    axios.get("/posts").then(res => {
      const data = res.data;
      // if blog posts come back
      if (data.payload) {
        // store them in state
        this.setState({ posts: data.payload });
      }
    });
  };

  componentDidMount() {
    // on component mount, get all blog posts
    this.refresh();
  }

  render() {
    return (
      <div className="posts">
        {this.state.posts.map(post => <Post {...post} />)}
      </div>
    );
  }
}

export default Blog;
