import clearday from '../png/044-sun.png';
import snow from "../png/030-snow.png";
import sleet from "../png/014-icicles.png";
import wind  from "../png/012-wind.png";
import fog from "../png/045-fog.png";
import cloudy from "../png/011-cloudy.png";
import partlycloudyday  from "../png/021-cloudy-1.png";
import partlycloudynight from "../png/028-cloudy-2.png";
import hail from "../png/031-hail.png";
import thunderstorm from "../png/016-tornado-1.png";
import tornado from "../png/048-weather.png";
import weatherDefault from "../png/048-weather.png"


export const iconSelector = (value) =>{
  console.log(value)
  switch (value) {
    case value === "clear-day":
      return clearday;
    case value === "snow":
      return snow
    case value === "sleet":
      return sleet
    case value === "wind":
      return wind
    case value === "fog":
      return fog
    case value === "cloudy":
      return cloudy
    case value === "partly-cloudy-day":
      return partlycloudyday
    case value === "partly-cloudy-night":
      return partlycloudynight
    case value === "hail":
      return hail
    case value === "thunderstorm":
      return thunderstorm
    case value === "tornado":
      return tornado
    default:
      console.log("DEFAULTENF")
      return weatherDefault


  }

}
