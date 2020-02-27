import React, { Fragment, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, i) => (acc += i), 0).toFixed(2);

  return (
    <Fragment>
      <div className="w-56 self-start text-gray-800">
        <h3 className="text-lg uppercase mt-2">Your balance</h3>
        <p className="text-3xl font-medium">
          $
          {new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
            total
          )}
        </p>
      </div>
    </Fragment>
  );
};

export default Balance;
