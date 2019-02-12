import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import NoMatch from './components/Error';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

// import Link from 'react-router-dom/Link';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-intro">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/error">Error</Link></li>
            </ul>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/about" component={ About } />
              <Route path="/about/new" component={ About } />
              <Route path="/home" component={ Home } />
              <Route component={ NoMatch } />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;