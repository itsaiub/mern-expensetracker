import React from "react";
import Transaction from "./Transaction";

const TransactionList = () => {
  return (
    <React.Fragment>
      <h3 className="text-2xl">History</h3>
      <hr className="border-t-2" />
      <ul>
        <Transaction />
        <Transaction />
      </ul>
    </React.Fragment>
  );
};

export default TransactionList;
