import React, { Component } from 'react';

import ListTodos from './components/ListTodos'

import './App.css';

class App extends Component {
  state = {
    title: "Todoy App",
    todos: ["coffee low"],
    todo: null
  }

  logger = (message) => {
    console.log("called :", message)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value}) // computed properties
  }

  addTodo = () => {
    const { todo, todos } = this.state
                      /// spread operator, passes contents in one at a time
    const nextTodos = [...todos, todo] // clone and join item to array

    const clonedState = JSON.parse(JSON.stringify(nextTodos))

    this.logger(clonedState)

    this.setState({
      todos: nextTodos,
      todo: ''
    })
  }

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate');
      this.addTodo()
    }
  }

  removeTodo = (index) => {
    let nextTodos = Array.from(this.state.todos)
    nextTodos.splice(index, 1)
    this.setState({
      todos: nextTodos
    })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <div>
          <input
            type="text"
            name="todo"
            placeholder="add your todoy"
            onChange={this.handleChange}
            onKeyPress={this.onKeyPress}
            value={this.state.todo}
          />
          &nbsp;
          <button onClick={this.addTodo}>Add</button>
        </div>

        <ListTodos/>

        <ul className="todo-list">
          {this.state.todos.map((todo, i) => {
            return (
              <li key={i}>
                {todo}
                &nbsp;
                <button onClick={(i) => this.removeTodo(i)}>Remove</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
