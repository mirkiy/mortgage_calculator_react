import React, { useState } from "react";

const MortgageForm = () => {
  const [formData, setFormData] = useState({
    salary1: "",
    salary2: "",
    deposit: "",
  });
  const handleChange = (event) => {
    const newData = {...formData}
    newData[event.target.name] = event.target.value
    setFormData(newData)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="mortgageForm">
      <form>
        <div className="formWrap">
        <label>Your salary:</label>
          <input
            onChange={handleChange}
            min="O"
            type="number"
            id="salary1"
            name="salary1"
            value={formData.salary1}
          />
        </div>
        <div className="formWrap">
        <label>Your partner's salary:</label>
        <input
            onChange={handleChange}
            min="O"
            type="number"
            id="salary2"
            name="salary2"
            value={formData.salary2}
          />
        </div>
        <div className="formWrap">
        <label>Your deposit:</label>
        <input
            onChange={handleChange}
            min="O"
            type="number"
            id="deposit"
            name="deposit"
            value={formData.deposit}
          />
        </div>
        <input onClick={handleSubmit} type='submit' value='calculate'/>
      </form>
    </div>
  );
};
export default MortgageForm;
