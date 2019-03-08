import { FETCH_ERROR,FETCH_REQUEST,FETCH_SUCCESS,UPDATE_ADDRESS_INPUT} from '../Types'

export const AddressFromInput = (payload) => {
  console.log('dfs')
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

export const fetchGetError = (payload) => {
  return {
    type: FETCH_ERROR,
    payload
  }
}

export const fetchWithThunk = (address) => {
  const newAddress = address.replace(" ", "+")
  return (dispatch) => {
    dispatch(fetchGetRequest());
  return fetch(`https://geocode.xyz/karachi+pakistan?json=1`)
          .then(data => {
            if(data.mathces === null) {
              dispatch(fetchGetError(data.error))
              } else {
                console.log(data);
                dispatch(fetchGetSuccess(data));
                }
              })
            .catch(err => dispatch(fetchGetError(err)));
      };
}
