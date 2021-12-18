import React, {useContext} from 'react';
import { GlobalState } from '../Context/GlobalState';

export const TransactionList = () => {

    const {transactions} = useContext(GlobalState);
    const {delTransaction} = useContext(GlobalState);
    console.log(delTransaction);
    //console.log(transactions[0]);

    return (
        <div className='center'>
            <h3>Transaction History</h3>
            <ul>
                {transactions.map(transaction => <li key={transaction.id} className={(transaction.amount < 0)? 'minus': 'plus'} >
                   {transaction.text}  
                  <span> {transaction.amount} </span>
                   <button className='btn' onClick={()=>delTransaction(transaction.id)}> X</button>  </li>)}
            </ul>
        </div>
    )
}
