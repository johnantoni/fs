import React, { Component } from 'react';

import AddTodo from './components/AddTodo'
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

  addNewTodo = () => {
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
      this.addNewTodo()
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
        <AddTodo
          handleChange={this.handleChange}
          onKeyPress={this.onKeyPress}
          todo={this.state.todo}
          addNewTodo={this.addNewTodo}
        />
        <ListTodos
          todos={this.state.todos}
          removeTodo={this.removeTodo}
        />

      </div>
    );
  }
}

export default App;
