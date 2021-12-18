import React, {useContext} from 'react';
import '../App.css';
import { GlobalState } from '../Context/GlobalState';


export const IncomeExpense = () => {

    const {transactions} = useContext(GlobalState);

    const income = transactions.map(transaction => parseFloat(transaction.amount)).filter(amount=> amount > 0).reduce(function(a, b){return a + b;}, 0);
    const expense = transactions.map(transaction => parseFloat(transaction.amount)).filter(amount=> amount < 0).reduce(function(a, b){return a + b;}, 0);


    return (
        <div className='incomeExpenceContainer center'>
            <div>
                <p>INCOME</p>
                <p className='income'>{income}</p>
            </div>
            <div>
                <p>EXPENSE</p>
                <p className='expense'>{Math.abs(expense)}</p>
            </div>
            
        </div>
    )
}
