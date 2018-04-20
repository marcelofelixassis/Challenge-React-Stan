import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Movie from './components/movie/Movie.jsx';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="grid" id="content__movies">
          <div className="content__grid">
            <Movie type="SERIES" sub_text="Popular Series"/>
            <Movie type="MOVIES" sub_text="Popular Movies"/>
            <Movie type="SERIES" sub_text="Popular Series"/>
            <Movie type="MOVIES" sub_text="Popular Movies"/>
            <Movie type="SERIES" sub_text="Popular Series"/>
            <Movie type="MOVIES" sub_text="Popular Movies"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
