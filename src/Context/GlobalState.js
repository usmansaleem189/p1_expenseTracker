import React, { createContext, useReducer }  from 'react';
import AppReducer from './AppReducer';
//import reducer1 from './AppReducer';



const initialState = {
    transactions: [] 
               // [{ id: 1, text: 'Flower', amount: -20 },
               //   { id: 2, text: 'Salary', amount: 300 },
               //   { id: 3, text: 'Book', amount: -10 },
               //   { id: 4, text: 'Camera', amount: 150 }
               //  ]
}





export const GlobalState = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);
    //const [state, dispatch] = useReducer(reducer1, initialState);

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    function delTransaction(transaction) {
        dispatch({
            type: 'DEL_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalState.Provider
        value = {
            {
            transactions: state.transactions,
            addTransaction,
            delTransaction
            }
        }>
            {children}
        </GlobalState.Provider>
    )



}