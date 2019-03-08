import { combineReducers } from 'redux';
import forcastIO_reducer from './forcastIO_reducer';
import geocodeXYZ_reducer from './geocodeXYZ_reducer';

const rootReducer = combineReducers({
  Forcast : forcastIO_reducer,
  Geocode : geocodeXYZ_reducer
})

export default rootReducer;
