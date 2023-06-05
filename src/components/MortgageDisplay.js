import React from "react";

const MortgageDisplay = ({ maxAmount }) => {
  if (!maxAmount) {
    return null;
  }

  return <div className="mortgageDisplay">{maxAmount}</div>;
};
export default MortgageDisplay;
