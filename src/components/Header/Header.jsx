import Logo from "../../assets/logo.png";
import ProfilePic from "../../assets/static/images/profile-pic2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faChevronDown,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">
          <img src={Logo} alt="softsuite logo" />
        </a>
      </div>
      <div className="header__nav">
        <div className="header__navOrgChange">
          <FontAwesomeIcon icon={faHouse} />
          <div className="header__navOrgChange_name">
            <span>Change Organization</span>
            <strong>PaperSoft Limited</strong>
          </div>
          <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: "12px" }} />
        </div>
        <div className="header__navSearch">
          <input
            className="header__navSearchInput"
            type="text"
            placeholder="Search for anything..."
          />

          <div className="header__navSearchIcon">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ fontSize: "14px" }}
            />
          </div>
        </div>
      </div>
      <div className="header__actions">
        <div className="header__actions_notification">
          <FontAwesomeIcon icon={faBell} style={{ fontSize: "18px" }} />
          <div className="header__actions_notificationBell"></div>
        </div>
        <div className="header__actions_profile">
          <div className="header__actions_profilePic">
            <img src={ProfilePic} alt="Profile pic" />
          </div>
          <div className="header__actions_profileName">
            <span>Timothy Mbachu</span>
            <span>Frontend Developer</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
