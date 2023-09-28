import React from "react";
import "./NameForm.scss";

const NameForm = () => {
  return (
    <form className="nameForm">
      <div className="form_group">
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Input name of bill" />
      </div>
      <div className="form_group">
        <label htmlFor="biller">Category</label>
        <select name="biller" id="biller">
          <option value="first">First Value</option>
          <option value="second">Second Value</option>
          <option value="third">Third Value</option>
        </select>
      </div>
      <div className="form_group">
        <label htmlFor="biller">Biller</label>
        <select name="biller" id="biller">
          <option value="first">First Value</option>
          <option value="second">Second Value</option>
          <option value="third">Third Value</option>
        </select>
      </div>
      <div className="form_group">
        <label htmlFor="biller">Product</label>
        <select name="biller" id="biller">
          <option value="first">First Value</option>
          <option value="second">Second Value</option>
          <option value="third">Third Value</option>
        </select>
      </div>
      <div className="form_group">
        <label htmlFor="customerId">Customer ID</label>
        <input type="text" placeholder="Input customer ID" />
      </div>
    </form>
  );
};

export default NameForm;
