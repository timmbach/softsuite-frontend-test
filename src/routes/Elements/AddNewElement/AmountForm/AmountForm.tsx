import React from "react";
import "./AmountForm.scss";
const AmountForm = () => {
  return (
    <form className="amountForm">
      <div className="form_group">
        <label htmlFor="amount">Amount</label>
        <input name="amount" id="amount" />
      </div>
      <div className="form_group">
        <label htmlFor="totalAmount">
          Total Amount (Amount + 2.5% charges)
        </label>
        <input type="number" name="totalAmount" id="totalAmount" />
      </div>
      <div className="form_group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Optional"
        />
      </div>
    </form>
  );
};

export default AmountForm;
