import { createStore , applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/index';

const store = createStore(rootReducer,compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 25 }))
);



export default store;
