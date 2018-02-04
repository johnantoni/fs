import React, { Component } from 'react'

class Greeting extends Component {
  render() {
    return (
      <h1>Welcome to my App</h1>
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      potato: 'i am a potato',
      version: '0.11.3',
      build: '6'
    }
  }

  handleClick = () => {
    alert(`oh god!!! what have you done!!! we're all gonna die`)
  }

  render() {
    return (
      <div>
        <Greeting/>
        <p>
          Do not press this <button onClick={this.handleClick}>button</button>
        </p>
        <h4>{this.state.potato}</h4>
        {/* i am a comment, if you see me somethings wrong!! */}
        <footer>
          <p>V.{this.state.version}, build {this.state.build}</p>
        </footer>
      </div>
    )
  }
}

export default App
