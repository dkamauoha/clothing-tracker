import React, { Component } from 'react';

//CSS
import './reset.css';
import './App.css';

//Routes
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4>Clothes-Tracker</h4>
        </header>
        <main>
          <div>
            {routes}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
