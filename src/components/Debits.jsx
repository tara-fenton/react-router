import React, { Component } from 'react';
import AccountBalance from './AccountBalance';

class Debits extends Component{
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
    
  }

  render(){
    const debitsComponents = this.props.debits.map((debit) => {
      return (
        <div className="debit-single">
          <p>Description: {debit.description}</p>
          <p>Amount: ${debit.amount}</p>
          <p>Date: {debit.date}</p>
        </div>
      )
    })

    return(
      <div>
        <AccountBalance accountBalance={this.props.accountBalance}/>
        <h2>Debits: </h2>
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
        {debitsComponents}
      </div>
    )
  }
}

export default Debits;