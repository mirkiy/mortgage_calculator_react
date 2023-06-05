import React from "react";

const MortgageDisplay = ({ maxAmount }) => {
  if (!maxAmount) {
    return null;
  }

  return <div className="mortgageDisplay">
       <div className="formWrap">
        <label>The amount you can borrow:</label>
        <input
            type='button'
            id="maxAmount"
            name="maxAmount"
            defaultValue={maxAmount}
          />
        </div>
  </div>;
};
export default MortgageDisplay;
