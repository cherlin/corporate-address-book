import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import { api } from './middleware/api';
import baseStyles from './styles/index';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(api('https://randomuser.me/api')),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
/* eslint-enable no-underscore-dangle */

const render = () => {
  baseStyles();
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
};

render();
registerServiceWorker();
