import React from "react";

const AddTransaction = () => {
  return (
    <React.Fragment>
      <h3 className="text-2xl">Add new transaction</h3>
      <hr className="border-t-2" />
      <form className="my-4">
        <div className="mb-2">
          <label
            className="block text-gray-800 text-sm font-bold mb-2"
            htmlFor="text"
          >
            Text
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="text"
            type="text"
            placeholder="Enter text..."
          />
        </div>

        <div className="mb-2">
          <label
            className="block text-gray-800 text-sm font-bold mb-2"
            htmlFor="amount"
          >
            Amount
            <small className="block">(negative-expense, positive-income)</small>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="amount"
            type="number"
            placeholder="Enter amount..."
          />
          <button
            className="bg-indigo-500 hover:bg-indigo-700 py-2 px-4 mt-4 w-full rounded text-white font-bold transition duration-500 ease-in-out"
            type="submit"
          >
            Add Transaction
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default AddTransaction;
