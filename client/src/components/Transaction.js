import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount > 0 ? "+" : "-";

  return (
    <li className="relative group">
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="p-1 bg-red-700 text-white text-black absolute opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-300 ease-out transform -translate-x-full translate-y-1/2"
      >
        X
      </button>
      <div
        className={
          transaction.amount > 0
            ? "p-4 my-3 bg-white shadow-md flex justify-between border-r-8 r border-green-700 rounded "
            : "p-4 my-3 bg-white shadow-md flex justify-between border-r-8 r border-red-700 rounded "
        }
      >
        <h6 className="capitalize">{transaction.text}</h6>
        <h5>{`${sign} $${new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 2
        }).format(Math.abs(transaction.amount).toFixed(2))}`}</h5>
      </div>
    </li>
  );
};

export default Transaction;
