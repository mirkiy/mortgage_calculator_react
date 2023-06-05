import React, { useState } from "react";
import MortgageDisplay from "../components/MortgageDisplay";
import MortgageForm from "../components/MortgageForm";

const MortgageContainer = () => {
  const [maxAmount, setMaxAmount] = useState();

  const handleSubmit = (data) => {
    const yearlyCommitments = data.other * 12;
    const yearlySalaries = (data.salary1 + data.salary2) - yearlyCommitments;
    const max = data.deposit + (yearlySalaries * 3);
    setMaxAmount(max);
    console.log(data)
  };

  return (
    <div className="mainContainer">
      <h1>Mortgage calculator:</h1>
      <MortgageForm onSubmit = {handleSubmit}/>
      <MortgageDisplay maxAmount={maxAmount} />
    </div>
  );
};
export default MortgageContainer;
