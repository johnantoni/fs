import React, { Component } from 'react'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    // this.handleClick = this.handleClick.bind(this)
    console.log("under construction")
  }

  componentDidMount() {
    console.log("built!")
  }

  handleClick = () => {
    const newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  render() {
    return (
      <div>
        <strong>{this.state.count}</strong> Potato's!!&nbsp;
        <button onClick={this.handleClick}>Increment County Mc Count</button>
      </div>
    )
  }
}

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
      build: '6',
      message: 'extra crunchy edition',
      counter: 0
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
        <Counter/>
        <footer>
          <p>V.{this.state.version}, build {this.state.build} {this.state.message}</p>
        </footer>
      </div>
    )
  }
}

export default App
