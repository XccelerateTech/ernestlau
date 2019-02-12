import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers/index'
import { Provider } from 'react-redux'
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';
// import { composeWithDevTools } from 'redux-devtools-extension';
import configureStore from './store/configureStore'


// const logger = function(store){
//     return function(next){
//         return function(action){
//             console.log('dispatching', action);
//             let result = next(action);
//             console.log('next state', store.getState())
//             return result
//         }
//     }
// }

// const error = store => next => action =>{
//     try {
//         next(action)
//     } catch(e) {
//         console.log('error'+ e)
//     }
// }

const store = configureStore()

// store.subscribe(() => { console.log("State updated!", store.getState()) })

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

if (module.hot) {
    module.hot.accept('./App', () => {
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('root'),
      )
    })
  }

serviceWorker.unregister();
