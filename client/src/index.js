import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import newTaskReducer from './reducers';

let store = createStore(
  newTaskReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
