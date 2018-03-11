import React from "react";

const Post = ({ title, description, _id, deletePost }) => (
  <div className="post">
    <h2>{title}</h2>
    <p>{description}</p>
    <button onClick={() => deletePost(_id)}>Delete Post</button>
  </div>
);

export default Post;
