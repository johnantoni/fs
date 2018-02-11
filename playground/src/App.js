import React, { Component } from 'react';
import logo from './logo.svg';
import background from './layout.jpg'
import './App.css';

class App extends Component {
  // we will never be unmounted!!!

  logger = (message) => {
    console.log("i am :", message)
  }

  constructor() {
    super()
    this.state = {
      title: 'Welcome to React'
    }
    this.logger("constructor")
  }

  componentDidMount() {
    this.logger("componentDidMount")
    this.setState({
      title: `"You may fire when ready."`
    })
  }

  render() {
    this.logger("render")
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <p className="App-intro">
          <img src={background} className="background" alt="background" />
        </p>
      </div>
    );
  }
}

export default App;
