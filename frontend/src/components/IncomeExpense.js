import React from "react";

const IncomeExpense = () => {
  return (
    <div className="p-3 my-4 bg-white shadow-md flex justify-between uppercase text-center rounded-sm">
      <div className="border-r border-gray-400 flex-1">
        <h5>income</h5>
        <p className="text-green-700 text-xl">$500</p>
      </div>
      <div className="flex-1 ">
        <h5>expense</h5>
        <p className="text-red-700 text-xl">$500</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
