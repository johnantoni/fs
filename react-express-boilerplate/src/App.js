import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["coffee low"],
      todo: ""
    }
  }

  componentDidMount() {
    this.refresh()
  }

  addTodo = () => {
    axios.post(`/todos/${this.state.todo}`).then(this.refresh);
    this.clearInput();
  };

  addTodo = () => {
    axios.post(`/todos/${this.state.todo}`);
    axios.get("/todos").then(res => {
      if (res.data.todos) {
        this.setState({ todos: res.data.todos });
      }
    });
    this.clearInput();
  };

  clearInput = () => {
    this.setState({
      todo: ''
    })
  }

  refresh = () => {
    axios.get("/todos").then(res => {
      if (res.data.todos) {
        this.setState({ todos: res.data.todos });
      }
    });
  };

  removeTodo = (index) => {
    axios.delete(`/todos/${index}`);
    axios.get("/todos").then(res => {
      if (res.data.todos) {
        this.setState({ todos: res.data.todos });
      }
    });
  }

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate');
      this.addTodo()
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value}) // computed properties
  }

  render() {
    return (
      <div>
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

        <div>
          <input
            type="text"
            name="todo"
            placeholder="add your todo"
            onChange={this.handleChange}
            onKeyPress={this.onKeyPress}
            value={this.state.todo}
          />
          &nbsp;
          <button onClick={this.addNewTodo}>Add</button>
        </div>
      </div>
    );
  }
}

export default App;
