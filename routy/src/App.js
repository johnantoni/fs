import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

const Socks = (props) => {
  return (
    <h3>{props.match.params.product}</h3>
  )
}

const Store = ({ match }) => {
  console.log(match)
  return (
    <div>
      <h2>Store</h2>
      <Link to={`/store/socks`}>Socks</Link>&nbsp;
      <Link to={`/store/cardy`}>Cardy</Link>&nbsp;
      <Link to={`/store/50cal`}>50 Cal</Link>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Routing</h1>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/about">About</Link>&nbsp;
          <Link to="/store">Store</Link>&nbsp;
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route path='/store' component={Store} />
          <Route path='/store/:product' component={Socks} />
        </div>
      </Router>
    );
  }
}

export default App;
