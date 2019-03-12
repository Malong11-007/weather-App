import React from 'react';
import {figure,Columns } from 'react-bulma-components';


const WeatherCard = (props) => {
  const timeConverter = (unix_timestamp) => {
    let date = new Date(unix_timestamp*1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var month = months[date.getMonth()];
    console.log(date.getDate())
    return `${date.getDate()}-${month}`;
  }

  const unitDecider = (unit) => {
    if(unit === "ca" || unit === "uk2" || unit === "si"){
      return {
        temp : "C",
        winspeed : "Meter/s"
      }
    } else {
      return {
        temp  : "F",
        windspeed : "Miles/h"

      }
    }
  }

  return(

      <div className="column">
        <figure className="image is-64x64 is-rounded">
          <img src={props.image} alt="Placeholder image"></img>
        </figure>
      <div>
        <p>Temperature : {props.temperatureMin}°{unitDecider(props.unit).temp} - {props.temperatureMax}°{unitDecider(props.unit).temp}</p>
        <p>Humidity : {props.humidity}%</p>
        <p>Pressure : {props.pressure} Hp</p>
        <p>WindSpeed : {props.windSpeed} {unitDecider(props.unit).winspeed}</p>
        <p>Time : {timeConverter(props.time)}</p>
      </div>
      </div>
  )
}



export default (WeatherCard);
