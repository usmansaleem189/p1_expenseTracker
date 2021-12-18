import React, {useState} from 'react';
import { useContext } from 'react';
import { GlobalState } from '../Context/GlobalState';


export const AddTransaction = () => {

    const [item, setItem] = useState('');
    const [amount, setAmount] = useState('');

    const {addTransaction} = useContext(GlobalState);
   // const {delTransaction} = useContext(GlobalState);
    console.log(addTransaction);

    const updateList = (e) => {
        e.preventDefault();
        console.log(item);
        console.log(amount);
        console.log(Date.now());

        const newTransaction = {
            id: Date.now(),
            text: item,
            amount: amount            
        }

        addTransaction(newTransaction);
        //delTransaction(2);

        setItem('');
        setAmount('');
    }
    

    return (
        <div className='center'>
            <h3>Add New Transaction</h3>
            <form onSubmit={updateList}>
                <label>Description</label>
                <input type='text' value={item} onChange={e => setItem(e.target.value)} placeholder='Detail of Transaction' required></input>
                <label>Transaction Amount</label>
                <input type='number' value={amount} onChange={e => setAmount(e.target.value)} placeholder='Dollar Value of Transaction' required></input>
                <button className='btn-add'>Add Transaction</button>
            </form>
        </div>
    )
}
