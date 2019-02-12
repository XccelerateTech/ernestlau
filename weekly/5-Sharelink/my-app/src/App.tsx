import AddButton from './AddButton'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import * as React from 'react';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="App-intro col-4">
              <img src={logo} className="App-logo" alt="logo" />
              <br/>
              King of JS
              <AddButton />
        </div>
            <div className="App-intro col-8">
              To get started, edit <code>src/App.tsx</code> and save to reload.
        </div>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        </div>
      </div>
    );
  }
}

export default App;
