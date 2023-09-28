import React from "react";
import Ibedc from "../../../../../assets/brands/ibedc.png";
import "./BillDetails.scss";

const BillDetails = () => {
  return (
    <div className="billDetails">
      <div className="heading">
        <img src={Ibedc} alt="" />
        <div className="title">
          <h4>IBEDC</h4>
          <p>John Okpe - 41546874184</p>
        </div>
      </div>
      <div className="body">
        <ul>
          <li className="name">
            <p>Name</p>
            <span>Electricity</span>
          </li>
          <li className="product">
            <p>Product :</p>
            <span>Prepaid</span>
          </li>
          <li className="amount">
            <p>Amount :</p>
            <span>$100</span>
          </li>
          <li className="frequency">
            <p>Frequency</p>
            <span>MOnthly(1)</span>
          </li>
          <li>
            <p>Start Date :</p>
            <span>10/6/6</span>
          </li>
          <li>
            <p>End Date :</p>
            <span>12/1/22</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BillDetails;
