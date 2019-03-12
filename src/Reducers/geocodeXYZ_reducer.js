import { FETCH_ERROR,FETCH_REQUEST,FETCH_SUCCESS,UPDATE_ADDRESS_INPUT} from '../Actions/Types'

const initialState = {
  address : "",
  geoError : false,
  
  geoFetching : false,
  data : null
};

function geocodeXYZ_reducer(state = initialState,action){
  console.log("GEOCODE",action)
  switch (action.type) {
    case FETCH_REQUEST:
      return {...state,geoFetching : true};

    case FETCH_SUCCESS:
    console.log(action.payload)
      return {...state,
          geoFetching : false,
          geoError : false,
          data : action.payload
        };

    case UPDATE_ADDRESS_INPUT:
      return {...state,
         address : action.payload,
         geoError : false
       }

    case FETCH_ERROR:
      return {...state,
                geoError : true,
                geoFetching : false
                };

    default:
      return state
  }
}

export default geocodeXYZ_reducer;
