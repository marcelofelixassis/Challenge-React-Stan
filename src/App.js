import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';

import Footer from './components/footer/Footer.jsx';
import ReactResizeDetector from 'react-resize-detector';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import MoviesPage from './pages/MoviesPage.jsx';
import SeriesPage from './pages/SeriesPage.jsx';


class App extends Component {
  onResize = () => {
    var header  = document.querySelector(".content__header");
    var body = document.querySelector("#content__movies");
    var footer = document.querySelector("#content__footer");
    var windowH = window.innerHeight;

    if (footer.offsetTop < windowH - footer.offsetHeight) {
      body.style.marginBottom = (windowH - header.offsetHeight - body.offsetHeight - footer.offsetHeight - 35) + "px";
    }else {
      body.style.marginBottom = "20px";
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <ReactResizeDetector handleWidth onResize={this.onResize} />
          <Header />
          <div className="grid" id="content__movies">
            <div className="content__grid">
              <Route exact path='/' component={HomePage} />
              <Route exact path='/MoviesPage' component={MoviesPage} />
              <Route exact path='/SeriesPage' component={SeriesPage} />
            </div>
          </div>
          <Footer />
        </div>
      </Router>  
    );
  }
}

export default App;
