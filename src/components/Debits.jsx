import React, { Component } from 'react';
import AccountBalance from './AccountBalance';

class Debits extends Component{
  constructor(props){
    super(props);
    this.state={
    }
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
        {debitsComponents}
      </div>
    )
  }
}

export default Debits;