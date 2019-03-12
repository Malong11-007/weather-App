import { combineReducers } from 'redux';
import geocodeXYZ_reducer from './geocodeXYZ_reducer';

const rootReducer = combineReducers({
  Geocode : geocodeXYZ_reducer
})

export default rootReducer;
