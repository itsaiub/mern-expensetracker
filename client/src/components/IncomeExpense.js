import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((transaction) => transaction > 0)
    .reduce((acc, i) => (acc += i), 0)
    .toFixed(2);

  const expense = amounts
    .filter((transaction) => transaction < 0)
    .reduce((acc, i) => (acc += i), 0)
    .toFixed(2);

  return (
    <div className="p-3 my-4 bg-white shadow-md flex justify-between uppercase text-center rounded-sm">
      <div className="border-r border-gray-400 flex-1">
        <h5>income</h5>
        <p className="text-green-700 text-xl">
          ${new Intl.NumberFormat().format(income)}
        </p>
      </div>
      <div className="flex-1 ">
        <h5>expense</h5>
        <p className="text-red-700 text-xl">
          - ${new Intl.NumberFormat().format(Math.abs(expense))}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
