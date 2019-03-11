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
          console.log(imgAddress)
          return <Columns.Column key={index}>
            <WeatherCard
                temperature={item.temperature}
                humidity={item.humidity}
                windSpeed={item.windSpeed}
                image={imgAddress}
                pressure={item.pressure}
                time={item.time}
            ></WeatherCard>
          </Columns.Column>
        })
      }

      </div>
  )
}



const mapStateToProps = state => ({ Geocode : state.Geocode })

export default connect(mapStateToProps)(WeatherBox);
