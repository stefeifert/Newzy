import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
        <Sidebar />
        <div id="page-wrap"></div>
      </div>
    )}
  };



export default App;
