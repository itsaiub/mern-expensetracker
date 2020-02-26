import React, { Fragment } from "react";

const Balance = () => {
  return (
    <Fragment>
      <div className="w-56 self-start text-gray-800">
        <h3 className="text-lg uppercase mt-2">Your balance</h3>
        <p className="text-3xl font-medium">$260.00</p>
      </div>
    </Fragment>
  );
};

export default Balance;
