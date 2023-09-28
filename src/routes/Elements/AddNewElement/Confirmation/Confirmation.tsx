import React from "react";
import "./Confirmation.scss";

const Confirmation = () => {
  return (
    <div className="confirmation">
      <div className="checkmark-circle">
        <div className="background"></div>
        <div className="checkmark draw"></div>
        <div className="foot_note">
          <p>Congratulations</p>
          <span>Your bill has been added successfully</span>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
