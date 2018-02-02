import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dH9HtJXsECAi_lVele-FpUQe4zB0qLN_Xb9of21rFgtvUkiG' className="App-logo" alt="logo" />
          <h1 className="App-title">Sorting Rat</h1>
        </header>
        <p className="App-intro">
          Would you like to take my Special Test?
        </p>
        <button> Yes! </button>
        <button> I guess... </button>
        <button> Of course I will, Rat </button>
      </div>
    );
  }
}

export default App;
