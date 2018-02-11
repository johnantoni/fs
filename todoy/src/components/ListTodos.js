import React, { Component } from 'react';

// we can do this for dumb components:
// => const ListTodos = ({ todos }) => {

const ListTodos = (props) => {
  const { todos, removeTodo } = props

  return (
      <div>
        <ul className="todo-list">
          {todos.map((todo, i) => {
            return (
              <li key={i}>
                {todo}
                &nbsp;
                <button onClick={(i) => removeTodo(i)}>Remove</button>
              </li>
            )
          })}
        </ul>
      </div>
  )
}

export default ListTodos
