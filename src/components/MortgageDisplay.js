import React from "react";

const MortgageDisplay = ({ maxAmount }) => {
  if (maxAmount === undefined) {
    return null;
  }

  const formattedAmount = maxAmount.toLocaleString(); // Format the value with commas as thousands separators

  return (
    <div className="mortgageDisplay">
      <div className="formWrap">
        <label>The amount you can borrow:</label>
        <input
          type="button"
          id="maxAmount"
          name="maxAmount"
          value={formattedAmount}
          readOnly
        />
      </div>
    </div>
  );
};

export default MortgageDisplay;
