import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Movie from './components/movie/Movie.jsx';
import Footer from './components/footer/Footer.jsx';
import ReactResizeDetector from 'react-resize-detector';

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
      <div className="App">
        <ReactResizeDetector handleWidth onResize={this.onResize} />
        <Header />
        <div className="grid" id="content__movies">
          <div className="content__grid">
            <Movie type="SERIES" sub_text="Popular Series"/>
            <Movie type="MOVIES" sub_text="Popular Movies"/>
            <Movie type="SERIES" sub_text="Popular Series"/>
            <Movie type="MOVIES" sub_text="Popular Movies"/>
            <Movie type="SERIES" sub_text="Popular Series"/>
          </div>
        </div>
        <Footer />
      </div>  
    );
  }
}

export default App;
