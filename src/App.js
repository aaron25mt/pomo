import React, { Component } from 'react';
import Timer from './components/timer.js';

import 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#home">Pomo</a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#home">Home</a></li>
                <li><a href="#settings">Settings</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="container">
          <div class="innerContainer">
            <Timer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
