import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ElementsRoute.scss";
import {
  faChevronRight,
  faMagnifyingGlass,
  faPlus,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import ElementsTable from "../../components/ElementsTable/ElementsTable";
import { useState } from "react";
import AddNewElement from "./AddNewElement/AddNewElement";

// import { useDispatch, useSelector } from "react-redux";
// import { getElements } from "../../features/elements/elementsSlice";
// import { useEffect } from "react";
// import { getLookups } from "../../features/lookups/lookupsSlice";
// import { getElementLinks } from "../../features/elementLinks/elementLinksSlice";

function Elements() {
  const [newElementModal, setNewElementModal] = useState(false);

  // const { elements, currentElementId, isLoading } = useSelector(
  //   (store) => store.elements
  // );
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getElements());
  //   // dispatch(getLookups());
  //   dispatch(getElementLinks(currentElementId));
  //   // dispatch(getLookups());
  //   // console.log(elements);
  // }, []);

  return (
    <>
      <div className="elementsRoute">
        <div className="elementsRoute__route">
          <span className="elementsRoute__route_module">
            Payroll Management
          </span>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="elementsRoute__route_arrow"
          />
          <span className="elementsRoute__route_module">Element Setup</span>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="elementsRoute__route_arrow"
          />
          <span>Elements</span>
        </div>
        <div className="elementsRoute__container">
          <h1 className="elementsRoute__container_heading">Elements</h1>
          <div className="elementsRoute__container_controls">
            <div className="elementsRoute__container_controls_nav">
              <div className="elementsRoute__search">
                <input
                  className="elementsRoute__searchInput"
                  type="text"
                  placeholder="Search for element"
                />

                <div className="elementsRoute__searchIcon">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ fontSize: "12px" }}
                  />
                </div>
              </div>
              <div className="elementsRoute__controls_slider">
                <FontAwesomeIcon icon={faSliders} />
              </div>
            </div>
            <button
              onClick={() => setNewElementModal(true)}
              className="elementsRoute__container_controls_addNew"
            >
              <span>Create Element</span>
              <FontAwesomeIcon icon={faPlus} style={{ fontSize: "12px" }} />
            </button>
          </div>
          <div className="elementsRoute__container_table">
            <ElementsTable />
          </div>
        </div>
      </div>
      {newElementModal && (
        <aside className="new_element_modal">
          <AddNewElement setNewElementModal={setNewElementModal} />
        </aside>
      )}
    </>
  );
}

export default Elements;
