
const initialState = {
  longitude : 0,
  latitude : 0,
  exclude : "",
  data : {},
  forcastError : false,
  forcastFetching : false, //loading animation or something like thats
};

function forcastIO_reducer(state = initialState,action){
  switch (action.type) {
    case action.type === null:
      return state;
    default:
      return state

  }
}

export default forcastIO_reducer;
