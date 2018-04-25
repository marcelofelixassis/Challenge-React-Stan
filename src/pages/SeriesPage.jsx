import React, { Component } from 'react';
import Movie from '../components/movie/Movie.jsx';
import axios from 'axios';

class SeriesPage extends Component {

  componentDidMount() {
    axios.get('https://api.github.com/users/maecapozzi')
    .then(response => console.log(response))
  }

  render() {
    return (
        <div>
            <Movie type="SERIES" sub_text="Popular Series"/>
            <Movie type="MOVIES" sub_text="Popular Movies"/>
            <Movie type="SERIES" sub_text="Popular Series"/>
            <Movie type="MOVIES" sub_text="Popular Movies"/>
            <Movie type="SERIES" sub_text="Popular Series"/>
            <Movie type="MOVIES" sub_text="Popular Movies"/>
        </div>
    );
  }
}

export default SeriesPage;
