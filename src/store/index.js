import { createStore } from 'redux';
import loaderReducer from './reducers/loader';

const store = createStore(
  loaderReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
