import React, { useContext, useEffect } from "react";
import Transaction from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <h3 className="text-2xl">History</h3>
      <hr className="border-t-2" />
      <ul>
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TransactionList;
