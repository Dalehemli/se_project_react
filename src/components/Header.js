import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import headerLogo from "../images/Logo.svg";
import ToggleSwitch from "./ToggleSwitch";
import headerButton from "../images/header-button.svg";
import CurrentUserContext from "../contexts/CurrentUserContext";
import "../blocks/Header.css";

const Header = ({
  parseWeatherData,
  handleSignIn,
  handleRegister,
  isLoggedIn,
  handleClick,
  handleMobile,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const userData = currentUser ? currentUser : { name: "", avatar: "" };

  if (!parseWeatherData) return null;

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__left">
        <NavLink exact to="/">
          <img className="header__logo" src={headerLogo} alt=" WTWR logo"></img>
        </NavLink>
        <p className="header__date" id="currentDate">
          {currentDate}, Greenville
        </p>
      </div>
      <button
        className="header__button"
        type="button"
        aria-label="mobile menu"
        onClick={handleMobile}
      >
        <img
          src={headerButton}
          className="header__mobile-menu"
          alt="Header Mobile Menu"
        />
      </button>
      <div className="header__right">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <button
              type="button"
              onClick={handleClick}
              className="header__add"
              aria-label="Add"
            >
              + Add clothes
            </button>
            <NavLink to="/profile" className="header__link">
              <p className="header__name">{userData.name}</p>
              <img
                className="header__avatar"
                src={userData.avatar}
                alt="User avatar"
              />
            </NavLink>
          </>
        ) : (
          <div className="header__login-info">
            <button className="header__signup" onClick={handleRegister}>
              Sign Up
            </button>
            <button className="header__login" onClick={handleSignIn}>
              Log In
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
