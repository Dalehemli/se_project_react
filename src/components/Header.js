import "../blocks/Header.css";
import Logo from "../images/logo.svg";
import Avatar from "../images/avatar.svg";
import ToggleSwitch from "./ToggleSwitch";
import { NavLink } from "react-router-dom";

const Header = ({ onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <NavLink exact="true" to="/">
          <div>
            <img src={Logo} alt="logo"></img>
          </div>
        </NavLink>
        <div className="header__date">{currentDate}, Cape Town </div>
      </div>
      <div className="header__avatar">
        <div className="header__slider"></div>
        <ToggleSwitch />
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add clothes
          </button>
        </div>
        <NavLink to="/profile">
          <div className="header__name">Samee Allie</div>
        </NavLink>
        <NavLink path="/profile">
          <div className="header__avatar">
            <img
              className="header__avatar-image"
              src={Avatar}
              alt="avatar"
            ></img>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
