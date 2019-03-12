import React from 'react';
import { figure, Columns } from 'react-bulma-components';
import WeatherCard from './WeatherCard'
import { connect } from 'react-redux'
import {iconSelector} from '../png/WeatherIcons';


const WeatherBox = (props) => {
  return(

      <div>
      {props.Geocode.data !== null &&

        props.Geocode.data.daily.data.map((item,index) => {
          console.log(item.icon)
        const imgAddress = iconSelector(item.icon)
          return <Columns className="Columns" key={index}>
            <WeatherCard
                temperatureMax={item.apparentTemperatureHigh}
                temperatureMin={item.apparentTemperatureLow }
                humidity={item.humidity}
                windSpeed={item.windSpeed}
                image={imgAddress}
                pressure={item.pressure}
                time={item.time}
                unit={props.Geocode.data.flags.units}
            ></WeatherCard>
          </Columns>
        })
      }

      </div>
  )
}



const mapStateToProps = state => ({ Geocode : state.Geocode })

export default connect(mapStateToProps)(WeatherBox);
