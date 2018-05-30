import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  constructor(){
    super();
    this.state={
      accountBalance= 14568.27,
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={<Home accountBalance={this.state.accountBalance}/>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
