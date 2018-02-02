import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

export default class ShowPerson extends Component {
  constructor(){
    super();

    this.state = {
      name: [],
      imdb_id: '',
      title: '',
      year: '',
      storyline: ''
    }
  }

  render() {
    
    const displayArray = this.props.SearchResults.map((element, index) => {
      return (
        <div className="SearchResults" key={index}>
          <span className="SearchResultsTitle">{ element.title }</span>
          <span className="SearchResultsYear">{ element.year }</span>
          <button onClick={ () => {this.props.addMovieToWatchList(index)} }>Add to watchlist</button>
          <button onClick={ () => {this.props.removeMovieFromWatchList(element.imdb_id) } }>Remove from watchlist</button>
          <br/>
          <span>{ element.storyline }</span>
          <br/>
        </div>
      )
    })
    return (
      <div className="App">
        { displayArray }
      </div>
    );
  }
}