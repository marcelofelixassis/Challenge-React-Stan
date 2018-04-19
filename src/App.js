import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
        <div className="grid" style={{marginTop: '35px'}}>
        <div className="content__grid">
          <div  style={{position: 'relative', float: 'left', padding: '0px 10px 0px 0px'}}>
            <img  src={logo} alt="" height="250px" width="155px" style={{backgroundColor: '#1e1e1e'}}/>
          </div>

          <div  style={{position: 'relative', float: 'left', padding: '0px 10px 0px 0px'}}>
            <img  src={logo} alt="" height="250px" width="155px" style={{backgroundColor: '#1e1e1e'}}/>
          </div>

          <div  style={{position: 'relative', float: 'left', padding: '0px 10px 0px 0px'}}>
            <img  src={logo} alt="" height="250px" width="155px" style={{backgroundColor: '#1e1e1e'}}/>
          </div>  

          <div  style={{position: 'relative', float: 'left', padding: '0px 10px 0px 0px'}}>
            <img  src={logo} alt="" height="250px" width="155px" style={{backgroundColor: '#1e1e1e'}}/>
          </div>

          <div  style={{position: 'relative', float: 'left', padding: '0px 10px 0px 0px'}}>
            <img  src={logo} alt="" height="250px" width="155px" style={{backgroundColor: '#1e1e1e'}}/>
          </div>

          <div  style={{position: 'relative', float: 'left', padding: '0px 10px 0px 0px'}}>
            <img  src={logo} alt="" height="250px" width="155px" style={{backgroundColor: '#1e1e1e'}}/>
          </div>

          <div  style={{position: 'relative', float: 'left', padding: '0px 10px 0px 0px'}}>
            <img  src={logo} alt="" height="250px" width="155px" style={{backgroundColor: '#1e1e1e'}}/>
          </div>

          <div  style={{position: 'relative', float: 'left', padding: '0px 10px 0px 0px'}}>
            <img  src={logo} alt="" height="250px" width="155px" style={{backgroundColor: '#1e1e1e'}}/>
          </div>
        </div>
        

       
       
       </div>

       
      
     
      </div>
    );
  }
}

export default App;
