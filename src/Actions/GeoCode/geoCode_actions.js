import { FETCH_ERROR,FETCH_REQUEST,FETCH_SUCCESS,UPDATE_ADDRESS_INPUT} from '../Types';

export const AddressFromInput = (payload) => {
  return {
    type: UPDATE_ADDRESS_INPUT,
    payload
  }
}

export const fetchGetRequest = () => {
  return {
    type: FETCH_REQUEST
  }
}

export const fetchGetSuccess = (payload) => {
  return {
    type: FETCH_SUCCESS,
    payload
  }
}

export const fetchGetError = () => {
  return {
    type: FETCH_ERROR,
  }
}

export const fetchWithThunk = (address) => {
  const newAddress = address.replace(" ", "+")
console.log(newAddress)
  return (dispatch) => {
    dispatch(fetchGetRequest())
    fetch(`http://open.mapquestapi.com/geocoding/v1/address?key=RhIvoGm12Hgez5NptCQRXbGi0WSJHdCn&location=${newAddress}`)
      .then(response => response.json())
        .then(response => {
          console.log(response.results[0])
          if(response.results[0].locations[0].adminArea5 !== ""  &&
              response.results[0].locations[0].geocodeQualityCode !== "A1XAX") {

    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/e931cae1649a3f5bf72b4f1fd9c7640c/${response.results[0].locations[0].latLng.lat},${response.results[0].locations[0].latLng.lng}?exclude=[currently,hourly]&units=auto`)
              .then(response => response.json())
                .then(response => dispatch(fetchGetSuccess(response)))
                .catch(err => fetchGetError())
            return response
          } else {
              dispatch(fetchGetError())
          }
        })
  }
}
