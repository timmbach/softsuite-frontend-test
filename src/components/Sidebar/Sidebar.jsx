import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.scss";
import {
  faArrowRightFromBracket,
  faBorderAll,
  faChevronDown,
  faCodeFork,
  faGear,
  faShuffle,
  faSquarePollHorizontal,
  faUserLarge,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import DashboardIcon from "../../assets/icons/dashboard-icon.png";
// import ActivitiesIcon from "../../assets/icons/activities-icon.png";
// import SalaryIcon from "../../assets/icons/salary-structure-icon.png";
// import EmployeesIcon from "../../assets/icons/employees-icon.png";
// import AccountImgIcon from "../../assets/icons/accountImg-icon.png";
// import LogoutIcon from "../../assets/icons/logout-icon.png";

function Sidebar() {
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
            <div className="sidebar__nav_dashboard">
              <FontAwesomeIcon
                icon={faBorderAll}
                className="sidebar__menuIcon"
              />
              <span>Dashboard</span>
            </div>
          </li>
          <li>
            <div className="sidebar__nav_activities">
              <FontAwesomeIcon
                icon={faSquarePollHorizontal}
                className="sidebar__menuIcon"
              />
              <span>Payroll Activities</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ fontSize: "12px", marginLeft: "50px" }}
              />
            </div>
          </li>
          <li>
            <div className="sidebar__nav_salaryStructure">
              <FontAwesomeIcon
                icon={faCodeFork}
                className="sidebar__menuIcon"
              />
              <span>Salary Structure</span>
            </div>
          </li>
          <li style={{ display: "flex", flexDirection: "column" }}>
            <div className="sidebar__nav_elementSetup">
              <FontAwesomeIcon icon={faGear} />
              <span>Element Setup</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ fontSize: "12px", marginLeft: "50px" }}
              />
            </div>
            <div className="sidebar__nav_elementSetup_options">
              <Link to="/elements">
                <span>Elements</span>
              </Link>
              <Link to="balances/:balanceId">
                <span>Balances</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="sidebar__nav_employees">
              <FontAwesomeIcon icon={faUsers} className="sidebar__menuIcon" />
              <span>Employees</span>
            </div>
          </li>
        </ul>
      </nav>
      <div className="sidebar__actions">
        <ul className="sidebar__actionsList">
          <li>
            <div className="sidebar__actions_payrollSettings">
              <FontAwesomeIcon icon={faGear} className="sidebar__menuIcon" />
              <span>Payroll Settings</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ fontSize: "12px", marginLeft: "50px" }}
              />
            </div>
          </li>
          <li>
            <div className="sidebar__actions_myAccount">
              <FontAwesomeIcon
                icon={faUserLarge}
                className="sidebar__menuIcon"
              />
              <span>My Account</span>
            </div>
          </li>
          <li>
            <div className="sidebar__actions_logout">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <span>Logout</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
