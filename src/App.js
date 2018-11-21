import React, { Component } from 'react';
import Home from './pages/Home'
import logo from './logo.svg';
import { Route } from 'react-router';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Route path="/about" render={() => <div> cunt </div>} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
