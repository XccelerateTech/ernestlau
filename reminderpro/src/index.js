import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import HomepageLayout from './components/Test'

// import TodoList from './components/TodoList';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger)
  )
);

ReactDOM.render(
  <Provider store={ store }>
    <HomepageLayout />
  </Provider>,
  document.getElementById('root')
);
