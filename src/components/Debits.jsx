import React, { Component } from 'react';

class Debits extends Component{
  constructor(props){
    super(props);
    this.state={
      debits: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:4000/debits", {
      method: 'GET'
    }).then((res)=>res.json())
    .then((json) => {
      this.setState({
        debits: json
      })
    }).catch( (err) => console.log(err));
  }

  render(){
    const debitsComponents = this.state.debits.map((debit) => {
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
        <h2>Debits: </h2>
        {debitsComponents}
      </div>
    )
  }
}

export default Debits;