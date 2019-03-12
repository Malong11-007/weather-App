import React, { Component } from 'react';
import Nvbar from './Components/Navbar';
import { connect } from 'react-redux';
import WeatherBox from './Components/WeatherBox'


import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
      {console.log(this.props.Geocode.geoFetching)}
        <Nvbar></Nvbar>
      {this.props.Geocode.geoError &&
        <div class="container notification is-danger">
          {`Sorry, we couldn't find any results matching ${this.props.Geocode.address}`}
        </div>
      }
      <WeatherBox></WeatherBox>
      </div>
    );
  }
}

const mapStateToProps = state => ({ Geocode : state.Geocode })

export default connect(mapStateToProps)(App);
