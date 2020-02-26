import React, { useContext } from "react";
import Transaction from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <h3 className="text-2xl">History</h3>
      <hr className="border-t-2" />
      <ul>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TransactionList;
