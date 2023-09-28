import React from "react";
import "./ElementDetailsForm.scss";
const ElementDetailsForm = () => {
  return (
    <form className="elementDetailsForm">
      <div className="elementDetailsForm__formGroup">
        {/* <label htmlFor="amount">Amount</label>
        <input name="amount" id="amount" /> */}
      </div>
      <div className="elementDetailsForm__formGroup">
        {/* <label htmlFor="totalAmount">
          Total Amount (Amount + 2.5% charges)
        </label> */}
        <input type="number" name="totalAmount" id="totalAmount" />
      </div>
      <div className="elementDetailsForm__formGroup">
        {/* <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Optional"
        /> */}
      </div>
    </form>
  );
};

export default ElementDetailsForm;
