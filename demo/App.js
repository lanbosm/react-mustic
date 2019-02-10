import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  sss(){
    var ss=0;
    ss++;
    console.log(222);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            onClick={this.sss}
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