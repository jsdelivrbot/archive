import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class WeatherList extends Component {
  constructor(props) {
    super(props);

    this.state = { city: {} };
  }
  renderWeather(cityData) {
    if(!cityData) return <div></div>;
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <div key={name}>
        <div><GoogleMap lon={lon} lat={lat} /></div>
        <div><Chart data={temps} color="orange" units="K" /></div>
        <div><Chart data={pressures} color="green" units="hPa" /></div>
        <div><Chart data={humidities} color="black" units="%" /></div>
      </div>
    );
  }

  componentDidMount(){
    this.props.fetchWeather(this.props.cityName);
  }

  render() {

    return (
      <div>
         { this.props.weather.filter(item => item.item.city.name===this.props.cityName).map(this.renderWeather)};
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
