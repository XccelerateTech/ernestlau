import React from 'react';
import ReactDOM from 'react-dom';
import App from './d53/ShoppingList/App';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

//d51
//ReactDOM.render(<App />, document.getElementById('root'));

//d52

//d53
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

//d54

//d55


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
