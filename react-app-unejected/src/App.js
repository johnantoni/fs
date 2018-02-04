import React, { Component } from 'react'
import PropTypes from 'prop-types'
import potatoNames from './potatoes'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    // this.handleClick = this.handleClick.bind(this)
    console.log("constructor")
  }

  componentCleanup = () => {
    console.log("componentCleanup")
  }

  componentWillMount() {
    console.log("componentWillMount")
  }

  componentWillUnmount() {
    this.componentCleanup()
    console.log("componentWillUnmount")
  }

  componentDidMount() {
    console.log("componentDidMount")
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
      <h1>{this.props.message}</h1>
    )
  }
}

// using propTypes to make sure our components get the props they need to operate, for debugging
Greeting.propTypes = {
  message: PropTypes.string.isRequired
}
// no you can't put it before defining Greeting as javascript is interpreted from top to bottom!!

// what's called a presentational component
const Featured = (props) => {
  return (
    <div>{props.message}</div>
  )
}

const ListPotatoes = (props) => {
  const potatoes = props.names
  return (
    <div>
      <h3>Potatoes Hall of Fame!!!</h3>
      <ul>
        { potatoes.map((item, i) => {
            return (<li key={i}>{item.name}</li>)
          })
        }
      </ul>
    </div>
  )
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
    const myText = (<p><strong>Why</strong> hello weary traveller!</p>)
    return (
      <div>
        <Greeting message="Welcome to my App!!!"/>
        <Greeting message="It's so cool"/>
        <p>
          Do not press this <button onClick={this.handleClick}>button</button>
        </p>
        {myText}
        <Featured message="i am featured!!"/>
        <ListPotatoes names={potatoNames}/>
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
