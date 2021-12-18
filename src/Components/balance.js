import React, {useContext} from 'react';
import { GlobalState } from '../Context/GlobalState';

export const Balance = () => {
    const {transactions} = useContext(GlobalState);
    const amountArray = transactions.map(transaction => parseFloat(transaction.amount));
    //console.log(amountArray);
    const amountTotal = amountArray.reduce(function(a, b){return a + b;}, 0);
    //console.log(amountTotal);

    return (
        <div className='balance'>
            <p>CURRENT BALANCE</p>
            <p className='money'>$ {amountTotal}</p>
        </div>
    )
}
