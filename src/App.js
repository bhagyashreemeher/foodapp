import './App.css';
import React, { Component } from 'react';
import Register from './views/user/register';

class App extends Component {
  // name = 'Foodie';
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
          <Register/>
          </p>
        </header>
      </div>
    );
  }
}

export default App;