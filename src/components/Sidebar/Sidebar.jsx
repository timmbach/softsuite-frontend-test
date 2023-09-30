import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.scss";
import {
  faArrowRightFromBracket,
  faBorderAll,
  faChevronDown,
  faChevronUp,
  faCodeFork,
  faGear,
  faShuffle,
  faSquarePollHorizontal,
  faUserLarge,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
// import DashboardIcon from "../../assets/icons/dashboard-icon.png";
// import ActivitiesIcon from "../../assets/icons/activities-icon.png";
// import SalaryIcon from "../../assets/icons/salary-structure-icon.png";
// import EmployeesIcon from "../../assets/icons/employees-icon.png";
// import AccountImgIcon from "../../assets/icons/accountImg-icon.png";
// import LogoutIcon from "../../assets/icons/logout-icon.png";

function Sidebar() {
  const [elementOptionsOpen, setElementOptionsOpen] = useState(false);
  const [payrollActivitiesOpen, setPayrollActivitiesOpen] = useState(false);
  const [payrollSettingsOpen, setPayrollSettingsOpen] = useState(false);
  return (
    <div className="sidebar">
      <div className="sidebar__modeSwitch">
        <FontAwesomeIcon
          icon={faShuffle}
          className="sidebar__modeSwitch_icon"
        />
        <div className="sidebar__modeSwitch_name">
          <span>Switch Module</span>
          <strong>Payroll Management</strong>
        </div>
        <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: "12px" }} />
      </div>
      <nav className="sidebar__nav">
        <ul className="sidebar__navList">
          <li>
            <button className="sidebar__nav_dashboard">
              <FontAwesomeIcon
                icon={faBorderAll}
                className="sidebar__menuIcon"
              />
              <span>Dashboard</span>
            </button>
          </li>
          <li>
            <button
              className={` ${
                payrollActivitiesOpen
                  ? "sidebar__nav_activities-active"
                  : "sidebar__nav_activities"
              }`}
              onClick={() => setPayrollActivitiesOpen(!payrollActivitiesOpen)}
              // style={{
              //   backgroundColor: `${
              //     payrollActivitiesOpen ? "#cde1e3" : "white"
              //   }`,
              //   // width: `${payrollActivitiesOpen ? "70%" : "100%"}`,
              // }}
            >
              <FontAwesomeIcon
                icon={faSquarePollHorizontal}
                className="sidebar__menuIcon"
              />
              <span
                className="sidebar__nav_activities_span"
                // className={`sidebar__nav_activities_span ${
                //   payrollActivitiesOpen && "active"
                // }`}
                // style={{
                //   color: `${payrollActivitiesOpen && "#2d416f"}`,
                //   fontWeight: `${payrollActivitiesOpen && "bold"}`,
                // }}
              >
                Payroll Activities
              </span>
              {!payrollActivitiesOpen ? (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ fontSize: "12px", marginLeft: "50px" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  style={{ fontSize: "12px", marginLeft: "20px" }}
                />
              )}
            </button>
            {payrollActivitiesOpen && (
              <ul
                className="sidebar__nav_activities_options"
                style={{
                  maxHeight: `${payrollActivitiesOpen ? "1000px" : "0px"}`,
                  transition: "max-height 1s ease-in-out",
                }}
              >
                <li>Payroll Run</li>
                <li>Payroll Reversal</li>
                <li>Payroll History</li>
                <li>Payroll Lock</li>
                <li>Enable Payslip</li>
                <li>Payroll Log</li>
                <li>Payroll Approval</li>
              </ul>
            )}
          </li>
          <li>
            <button className="sidebar__nav_salaryStructure">
              <FontAwesomeIcon
                icon={faCodeFork}
                className="sidebar__menuIcon"
              />
              <span>Salary Structure</span>
            </button>
          </li>
          <li style={{ display: "flex", flexDirection: "column" }}>
            <button
              className="sidebar__nav_elementSetup"
              onClick={() => setElementOptionsOpen(!elementOptionsOpen)}
            >
              <FontAwesomeIcon icon={faGear} />
              <span>Element Setup</span>
              {!elementOptionsOpen ? (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ fontSize: "12px", marginLeft: "50px" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  style={{ fontSize: "12px", marginLeft: "50px" }}
                />
              )}
            </button>
            {elementOptionsOpen && (
              <div
                className="sidebar__nav_elementSetup_options"
                style={{
                  maxHeight: `${elementOptionsOpen ? "1000px" : "0px"}`,
                  transition: "max-height 1s ease-in-out",
                  transitionDelay: "0.1s",
                }}
              >
                <NavLink
                  to="/elements"
                  className="sidebar__nav_elementSetup_elements"
                >
                  <span>Elements</span>
                </NavLink>
                <NavLink
                  to="balances/:balanceId"
                  className="sidebar__nav_elementSetup_balances"
                  // activeClassName="active-link"
                >
                  <span>Balances</span>
                </NavLink>
              </div>
            )}
          </li>
          <li>
            <button className="sidebar__nav_employees">
              <FontAwesomeIcon icon={faUsers} className="sidebar__menuIcon" />
              <span>Employees</span>
            </button>
          </li>
        </ul>
      </nav>
      <div className="sidebar__actions">
        <ul className="sidebar__actionsList">
          <li>
            <button
              className="sidebar__actions_payrollSettings"
              onClick={() => setPayrollSettingsOpen(!payrollSettingsOpen)}
            >
              <FontAwesomeIcon icon={faGear} className="sidebar__menuIcon" />
              <span>Payroll Settings</span>
              {!payrollSettingsOpen ? (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ fontSize: "12px", marginLeft: "50px" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  style={{ fontSize: "12px", marginLeft: "50px" }}
                />
              )}
            </button>
            {payrollSettingsOpen && (
              <ul
                className="sidebar__actions_payrollSettings_options"
                style={{
                  maxHeight: `${payrollSettingsOpen ? "1000px" : "0px"}`,
                  transition: "max-height 1s ease-in-out",
                }}
              >
                <li>Payment Options</li>
                <li>Deduction Account Setup</li>
                <li>Variation Portal Period</li>
                <li>Tax Setup</li>
              </ul>
            )}
          </li>
          <li>
            <button className="sidebar__actions_myAccount">
              <FontAwesomeIcon
                icon={faUserLarge}
                className="sidebar__menuIcon"
              />
              <span>My Account</span>
            </button>
          </li>
          <li>
            <button className="sidebar__actions_logout">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
