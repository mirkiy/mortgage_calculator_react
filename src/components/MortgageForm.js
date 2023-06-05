import React, { useState } from "react";

const MortgageForm = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    salary1: "",
    salary2: "",
    deposit: "",
    other: ""
  });
  const handleChange = (event) => {
    const newData = {...formData}
    newData[event.target.name] = parseInt(event.target.value);
    setFormData(newData)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
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
        <div className="formWrap">
        <label>Other monthly commitments:</label>
        <input
            onChange={handleChange}
            min="O"
            type="number"
            id="other"
            name="other"
            value={formData.other}
          />
        </div>
        <input onClick={handleSubmit} type='submit' value='calculate'/>
      </form>
    </div>
  );
};
export default MortgageForm;
