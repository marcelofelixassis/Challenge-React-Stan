import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Movie from './components/movie/Movie.jsx';
import logo from './logo.svg';

class App extends Component {
  render() {

    window.onload = function() {
      var topo  = document.querySelector(".content__header");
      var conteudo = document.querySelector("#content__movies");
      var rodape = document.querySelector(".content__footer");
      var tamanhoTela = window.innerHeight;

      if (rodape.offsetTop < tamanhoTela - rodape.offsetHeight) {
        conteudo.style.marginBottom = (tamanhoTela - topo.offsetHeight - conteudo.offsetHeight - rodape.offsetHeight - 35) + "px";
      } else {
        conteudo.style.marginBottom = "20px";
      }
    }

    window.onresize = function() {
      var topo  = document.querySelector(".content__header");
      var conteudo = document.querySelector("#content__movies");
      var rodape = document.querySelector(".content__footer");
      var tamanhoTela = window.innerHeight;


      console.log(tamanhoTela);
      console.log(tamanhoTela);
      console.log(tamanhoTela);
      console.log(tamanhoTela);
      
      if (rodape.offsetTop < tamanhoTela - rodape.offsetHeight) {
        conteudo.style.marginBottom = (tamanhoTela - topo.offsetHeight - conteudo.offsetHeight - rodape.offsetHeight - 35) + "px";
      } else {
        conteudo.style.marginBottom = "20px";
      }
    }
 
    return (
      <div>
      <div className="App">
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
        
      </div>  
      <footer className="content__footer">asdfasdf</footer>  
      </div>
    );
  }
}

export default App;
