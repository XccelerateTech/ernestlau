import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact'
import About from './pages/About'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
// import About from './pages/About.js';
// import Contact from './pages/Contact.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar />
        <Jumbotron title="Welcome" subtitle="Put something witty here!" />
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
