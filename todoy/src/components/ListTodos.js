import React, { Component } from 'react';

import Todo from './Todo'

// we can do this for dumb components:
// => const ListTodos = ({ todos }) => {

const ListTodos = (props) => {
  const { todos, removeTodo } = props

  return (
      <div>
        <ul className="todo-list">
          {todos.map((todo, i) => {
            return (
              <Todo
                todo={todo}
                removeTodo={removeTodo}
                i={i}
              />
            )
          })}
        </ul>
      </div>
  )
}

export default ListTodos
