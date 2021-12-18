import './App.css';
import { Header } from './Components/header';
import { Balance } from './Components/balance';
import { IncomeExpense } from './Components/incomeExpense';
import { TransactionList } from './Components/transactionList';
import { AddTransaction } from './Components/addTransaction';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <div className='container'>
      <GlobalProvider>
          <Header /> 
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
      </GlobalProvider>
    </div>
    
  );
}


export default App;
