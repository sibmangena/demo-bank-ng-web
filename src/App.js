import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Demo Bank</h1>
        </header>
        <p className="App-intro">
          Demo-Bank an implementation of an online bank.
        </p>
      </div>
    );
  }
}

export default App;
