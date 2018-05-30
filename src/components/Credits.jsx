import React, { Component } from 'react';
import AccountBalance from './AccountBalance';

class Credits extends Component{
  constructor(props){
    super(props);
    this.state={
      description: "",
      amount: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]:value,
    })
  }

  handleSubmit(event){
    event.preventDefault();
    let date = new Date();
    this.props.addCredit({
      description: this.state.description,
      amount: this.state.amount,
      date: date.toDateString()
    })
  }

  render(){
    const creditsComponents = this.props.credits.map((credit, i) => {
      return (
        <div key={i} className="credit-single">
          <p>Description: {credit.description}</p>
          <p>Amount: ${credit.amount}</p>
          <p>Date: {credit.date}</p>
        </div>
      )
    })

    return(
      <div>
        <AccountBalance accountBalance={this.props.accountBalance}/>
        <h2>Credits: </h2>
        <form onSubmit={this.handleSubmit}>
          <input name="description" onChange={this.handleChange} type="text" 
            placeholder="Description" value={this.state.description}
          />
          <br />
          <input name="amount" onChange={this.handleChange} type="number"  
            placeholder="Amount" value={this.state.amount}
          />
          <br />
          <input type="submit" value="Add"/>
        </form>
        {creditsComponents}
      </div>
    )
  }
}

export default Credits;