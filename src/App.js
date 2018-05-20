import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile/>
        <List/>
      </div>
    );
  }
}

export default App;
