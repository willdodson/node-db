import React, { Component } from 'react';
import logo from './logo.svg';
// import {House} from './House.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dH9HtJXsECAi_lVele-FpUQe4zB0qLN_Xb9of21rFgtvUkiG' className="App-logo" alt="logo" />
          <h1 className="App-title">Sorting Rat</h1>
        </header>
        <div className="ratTest">
          <p className="App-intro">
            Would you like to take my <b><i>Special Test?</i></b>
          </p>
          <button> Yes! </button>
          <button> I guess... </button>
          <button> Of course I will, Rat </button>

        </div>
        <br></br>
        <div className="Animal">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPTDt5quKKzu4v9v7TdHjyplYeO8lGoS7_-6NxiOqJKR8CiPLsNg" className="spirit-animal" />
          Sorry, but you are a Dragon(not a Rat)
        </div>
        <br></br>
        <div>
          {/* <button onClick={ () => console.log("You're a slimy Slytherin") }>GET SORTED</button> */}
        </div>
      </div>
    );
  }
}

export default App;
