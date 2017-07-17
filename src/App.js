import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import Timer from './components/timer';
import SettingsModal from './components/settings-modal';
import Option from './components/option';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentTab: "home",
      timeInSecs: 1500,
      isRunning: false,
      phase: "Pomodoro",
      showModal: false
    };
  }

  switchTab(currentTab) {
    this.setState({currentTab});
    
    if (currentTab === "settings") { 
      this.showModal();
    }
  }

  showModal() {
    this.setState({showModal: true});
  }

  closeModal() {
    this.setState({showModal: false});
  }

  resetTimer() {
    this.setState({
      timeInSecs: 1500,
      isRunning: false,
      phase: "Pomodoro"
    });
    clearInterval(this.interval);
  }

  toggleTimer() {
    if (this.state.isRunning) {
      clearInterval(this.interval);
    } else {
      this.interval = setInterval(() => { this.setState({timeInSecs: this.state.timeInSecs - 1}); }, 1000);
    }
    this.setState({isRunning: !this.state.isRunning});
  }

  render() {
    return (
      <div>
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
                <li className={this.state.currentTab === "home" ? "active" : ""} onClick={() => this.switchTab('home')}><a>Home</a></li>
                <li className={this.state.currentTab === "settings" ? "active" : ""} onClick={() => this.switchTab('settings')}><a>Settings</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="modal-container">
            <SettingsModal show={this.state.showModal} close={this.closeModal}>
              <Option>Pomodoro</Option>
              <Option>Short Break</Option>
              <Option>Long Break</Option>
            </SettingsModal>
          </div>
          <div className="innerContainer">
            <div className="main">
              <Timer timeInSecs={this.state.timeInSecs} />
              <Button bsSize="large" bsStyle={this.state.isRunning ? "danger" : "success"} onClick={() => this.toggleTimer()}>
                {this.state.isRunning ? "Stop" : "Start"}
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
        </div>
      </div>
    );
  }
}

export default App;
