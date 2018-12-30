import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import './UserInput/UserInput.css';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "ameena"
  };

  changeNameHandler = (event) => {
    this.setState({username: event.target.value});
  };

  render() {
    return (
      <div className="App">
        <UserInput change={this.changeNameHandler} value={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
