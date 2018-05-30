import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Debits from './components/Debits';

class App extends Component {
  constructor(){
    super();
    this.state={
      accountBalance: 14568.27,
      currentUser: {
        userName: 'tara',
        memberSince: '10/21/2010'
      },
      debits: [],
      credits: []
    }
  }

  calculateAccountBalance(credits, debits){
    let creditTotal = credits.reduce((sum, credit) => {
      return sum + credit.amount;
    }, 0);
    let debitTotal = debits.reduce((sum, debit) => {
      return sum + debit.amount;
    }, 0);
    return Number((creditTotal - debitTotal).toFixed(2));
  }



  componentDidMount(){
    fetch("http://localhost:4000/debits", {
      method: 'GET'
    }).then((res)=>res.json())
    .then((debits) => {
      fetch("http://localhost:4000/credits", {
        method: 'GET'
      }).then((res)=>res.json())
      .then((credits) => {
        const balance = this.calculateAccountBalance(credits, debits);
        this.setState({
          accountBalance: balance,
          debits: debits,
          credits: credits
        })
      }).catch( (err) => console.log(err));
    }).catch( (err) => console.log(err));
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile 
        userName={this.state.currentUser.userName} 
        memberSince={this.state.currentUser.memberSince} 
      />
    );
    const LogInComponent = () => (
      <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn}/>
    );
    const DebitComponent = () => (<Debits accountBalance={this.state.accountBalance}/>);



    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/debits" render={DebitComponent}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
