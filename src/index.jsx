import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'store';

import App from './app';

const rootElement = document.getElementById('root'); // eslint-disable-line

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement,
);

if (module.hot) {
  module.hot.accept('.', () => {
    console.log('Accepting HMR @ ./*');
  });
}
