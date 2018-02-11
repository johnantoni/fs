import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const About = () => {
  return (
    <div>
      About
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Routing</h1>
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
