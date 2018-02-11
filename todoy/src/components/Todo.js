import React, { Component } from 'react';

// we can do this for dumb components:
// => const ListTodos = ({ todos }) => {

const Todo = (props) => {
  const { todo, removeTodo, i } = props

  return (
    <li key={i}>
      {todo}
      &nbsp;
      <button onClick={(i) => removeTodo(i)}>Remove</button>
    </li>
  )
}

export default Todo
