import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  constructor(){
    super();
    this.state={
      accountBalance: 14568.27,
    }
  }

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
