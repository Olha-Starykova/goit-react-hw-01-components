import React from 'react';


const Transactions = ({ type, amount, currency }) => (
    
    <>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </>
)

export default Transactions;
  