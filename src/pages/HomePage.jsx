import React, { Component } from 'react';
import Movie from '../components/movie/Movie.jsx';
import {Link} from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
        <div>
            <Link to="/SeriesPage"><Movie type="SERIES" sub_text="Popular Series"/></Link>
            <Link to="/MoviesPage"><Movie type="MOVIES" sub_text="Popular Movies"/></Link>
        </div>
    );
  }
}

export default HomePage;
