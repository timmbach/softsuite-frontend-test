import React, { useState } from "react";
import NameForm from "./NameForm/NameForm";
import "./AddNewElement.scss";
import FrequencyForm from "./FrequencyForm/FrequencyForm";
import AmountForm from "./AmountForm/AmountForm";
import Confirmation from "./Confirmation/Confirmation";
import BillDetails from "./BIllDetails/BillDetails";

const AddNewElement = ({ setNewElementModal }: any) => {
  const [page, setPage] = useState(0);

  const FormPageTitles = [
    "Add New Bill",
    "Add New Bill",
    "Add New Bill",
    "Confirmation",
    "Bill Details",
  ];

  const [formData, setFormData] = useState({});

  const FormPages = () => {
    if (page == 0) {
      return <NameForm />;
    } else if (page == 1) {
      return <FrequencyForm />;
    } else if (page == 2) {
      return <AmountForm />;
    } else if (page == 3) {
      return <Confirmation />;
    } else if (page == 4) {
      return <BillDetails />;
    }
  };
  return (
    <div className="modal_background">
      <div className="modal_container">
        <div className="header">
          <h4 className="title">{FormPageTitles[page]}</h4>
          <button
            onClick={() => setNewElementModal(false)}
            style={{
              display: `${page == 3 ? "none" : page > 3 ? "flex" : "flex"}`,
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="partition_div"></div>
        <div className="form_progress">
          <span style={{ display: page === 0 ? "flex" : "none" }}>
            Step 1 of 3
          </span>
          <span style={{ display: page === 1 ? "flex" : "none" }}>
            Step 2 of 3
          </span>
          <span style={{ display: page === 2 ? "flex" : "none" }}>
            Step 3 of 3
          </span>
          <div
            style={{ display: page > 2 ? "none" : "flex" }}
            className="progress_bar"
          >
            <div
              className="inner_progress_bar"
              style={{
                width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
              }}
            ></div>
          </div>
        </div>
        <div className="body">{FormPages()}</div>
        <div
          className="footer"
          style={{ display: `${page > 2 ? "none" : "flex"}` }}
        >
          <button
            disabled={page <= 0}
            onClick={() => setPage((currentPage) => currentPage - 1)}
          >
            Back
          </button>
          <button onClick={() => setPage((currentPage) => currentPage + 1)}>
            Continue
          </button>
        </div>
        <div
          className="footer2"
          style={{
            display: `${page <= 2 ? "none" : page > 3 ? "none" : "flex"}`,
          }}
        >
          <button
            disabled={page <= 0}
            onClick={() => setPage((currentPage) => currentPage + 1)}
          >
            View Details
          </button>
          <button onClick={() => setNewElementModal(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddNewElement;
