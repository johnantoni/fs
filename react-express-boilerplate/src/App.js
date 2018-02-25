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
    if (this.state.todo !== '') {
      axios.post(`/todos/${this.state.todo}`)
        .then(
          this.refresh()
        );
      this.clearInput();
    }
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

  removeTodo = (i) => {
    console.log(i)
    axios.delete(`/todos/${i}`);
    this.refresh()
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
              <li key={i} id={`todo-${i}`}>
                {todo}
                &nbsp;
                <button onClick={(e) => this.removeTodo(i)}>Remove</button>
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
