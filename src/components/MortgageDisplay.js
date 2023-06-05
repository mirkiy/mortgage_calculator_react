import React from "react";

const MortgageDisplay = ({ maxAmount }) => {
    if (isNaN(maxAmount) || maxAmount === undefined) {
      return null;
    }
  
    const formattedAmount = parseInt(maxAmount).toLocaleString();
  
    return (
      <div className="mortgageDisplay">
        <div className="formWrap">
          <label>The amount you can borrow:</label>
          <input type="button" id="maxAmount" name="maxAmount" value={formattedAmount} readOnly />
        </div>
      </div>
    );
  };
  

export default MortgageDisplay;
