
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import WeatherCard from './WeatherCard'
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import ShoppingList from './Shoppinglist'


// function formatName (user: any){
//   return user.firstName + ' ' + user.lastName
// }

// const name = {firstName:'Joe', lastName:'Lam'}

// const element = <h1>Hello! {formatName(name)}</h1>

// const element = (<div className="contaniner"><h1 style={{color:'red'}}>Hello!{formatName(name)}</h1>
// <h2 style={{color:'brown'}}>Hello!Fuck you</h2></div>);


ReactDOM.render( 
  <WeatherCard date={"Wed"} maxtemp={'27'} mintemp={'22'}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
