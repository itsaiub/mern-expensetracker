import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

const App = () => {
  return (
    <div className="flex flex-col py-10 justify-center items-center">
      <Header />
      <div className="w-1/2 md:w-1/3">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
};

export default App;
