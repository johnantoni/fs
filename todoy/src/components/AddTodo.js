import React, { Component } from 'react';

// we can do this for dumb components:
// => const ListTodos = ({ todos }) => {

const AddTodo = (props) => {
  const { handleChange, onKeyPress, todo, addNewTodo } = props

  return (
    <div>
      <input
        type="text"
        name="todo"
        placeholder="add your todoy"
        onChange={handleChange}
        onKeyPress={onKeyPress}
        value={todo}
      />
      &nbsp;
      <button onClick={addNewTodo}>Add</button>
    </div>
  )
}

export default AddTodo
