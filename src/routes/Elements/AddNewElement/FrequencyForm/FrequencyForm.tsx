import React from "react";
import "./FrequencyForm.scss";

const FrequencyForm = () => {
  return (
    <form className="frequencyForm">
      <div className="form_group">
        <label htmlFor="frequency">Frequency</label>
        <select name="frequency" id="frequency">
          <option value="first">First Value</option>
          <option value="second">Second Value</option>
          <option value="third">Third Value</option>
        </select>
        <span>We'll send you a notification 7 day prior to the date</span>
      </div>
      <div className="form_group">
        <label htmlFor="biller">Start Date</label>
        <input type="date" name="start_date" />
      </div>
      <div className="form_group">
        <label htmlFor="biller">End Date</label>
        <input type="date" name="end_date" />
      </div>
    </form>
  );
};

export default FrequencyForm;
