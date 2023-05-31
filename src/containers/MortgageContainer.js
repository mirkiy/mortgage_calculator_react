import React from "react";
import MortgageDisplay from "../components/MortgageDisplay";
import MortgageForm from "../components/MortgageForm";

const MortgageContainer = () => {
  return (
    <div className="mainContainer">
      <h1>Mortgage calculator:</h1>
      <MortgageForm />
      <MortgageDisplay />
    </div>
  );
};
export default MortgageContainer;
