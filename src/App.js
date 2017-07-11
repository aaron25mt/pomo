import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Timer from './components/timer.js';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      timeInSecs: 1500,
      isRunning: false,
      buttonStyle: "success",
      buttonText: "Start",
      phase: "Pomodoro"
    };
  }

  resetTimer() {
    this.setState({
      timeInSecs: 1500,
      isRunning: false,
      buttonStyle: "success",
      buttonText: "Start"
    });
    clearInterval(this.interval);
  }

  toggleTimer() {
    if (this.state.isRunning) {
      this.setState({
        isRunning: false,
        buttonStyle: "success",
        buttonText: "Start"
      });
      clearInterval(this.interval);
    } else {
      this.setState({
        isRunning: true,
        buttonStyle: "danger",
        buttonText: "Stop"
      });
      this.interval = setInterval(() => this.tick(), 1000);
    }
  }

  tick() {
    if (this.state.isRunning) {
      this.setState({
        timeInSecs: this.state.timeInSecs - 1
      });
    }
  }

  render() {
    return (
      <div className="app">
        <div className="main">
          <Timer timeInSecs={this.state.timeInSecs} />
          <Button bsSize="large" bsStyle={this.state.buttonStyle} onClick={() => this.toggleTimer()}>
            {this.state.buttonText}
          </Button>
          <Button bsSize="large" onClick={() => this.resetTimer()}>
            Reset
          </Button>
        </div>
        <div className="info">
          <h3>Current Phase:</h3>
          <h1>
            <i>{this.state.phase}</i>
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
