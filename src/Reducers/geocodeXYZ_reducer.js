import { FETCH_ERROR,FETCH_REQUEST,FETCH_SUCCESS,UPDATE_ADDRESS_INPUT} from '../Actions/Types'

const initialState = {
  address : "",
  geoError : false,
  geoFetching : false,
  data : {}
};

function geocodeXYZ_reducer(state = initialState,action){
  console.log(action)
  switch (action.type) {
    case FETCH_REQUEST:
    console.log('loolls')
      return {...state,geoFetching : true};

    case FETCH_SUCCESS:
      console.log(action.payload)
      return {...state, data: action.payload};

    case UPDATE_ADDRESS_INPUT:
      console.log(state.address.concat(action.payload))
      return {...state, address : state.address.concat(action.payload)}

    case FETCH_ERROR:
      return state;
      
    default:
    console.log("dsfjdkfs")
      return state
  }
}

export default geocodeXYZ_reducer;
