import React, { Component } from 'react';
import logo from '../../logo.svg';

class Movie extends Component {
  render() {
    return (      
        <div className="movie">
            <img  src={logo} alt="" height="220px" width="140px"/>
            <div id="movie__type">{this.props.type}</div>
            <div id="subtext">{this.props.sub_text}</div>
        </div>  
    );
  }
}

export default Movie;

