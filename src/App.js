import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          Hello World
        </div>
      </Router>
    );
  }
}

export default App;
