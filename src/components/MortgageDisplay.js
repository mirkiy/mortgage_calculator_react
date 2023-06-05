import React from "react";

const MortgageDisplay = ({ maxAmount }) => {
  if (!maxAmount) {
    return null;
  }

  return <div className="mortgageDisplay">
       <div className="formWrap">
        <label>Other monthly commitments:</label>
        <input
            // min="O"
            // type="number"
            id="maxAmount"
            name="maxAmount"
            defaultValue={maxAmount}
          />
        </div>
  </div>;
};
export default MortgageDisplay;
