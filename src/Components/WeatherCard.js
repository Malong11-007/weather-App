import React from 'react';
import {figure,Columns } from 'react-bulma-components';


const WeatherCard = (props) => {
  return(

      <Columns.Column className="Column">
        <figure className="image is-64x64 is-rounded">
          <img src={props.image} alt="Placeholder image"></img>
        </figure>
      <div>
        <p>Temperature : {props.temperature}</p>
        <p>Humidity : {props.humidity}</p>
        <p>Pressure : {props.pressure}</p>
        <p>WindSpeed : {props.windSpeed}</p>
        <p>Time : {props.time}</p>
      </div>
      </Columns.Column>
  )
}



export default (WeatherCard);
