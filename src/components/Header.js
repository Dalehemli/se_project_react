// import React, { useContext } from "react";
// import "../blocks/Header.css";
// import Logo from "../images/Logo.svg";
// import Avatar from "../images/avatar.svg";
// import ToggleSwitch from "./ToggleSwitch";
// import { NavLink } from "react-router-dom";
// import CurrentUserContext from "../contexts/CurrentUserContext";

// const Header = ({ onCreateModal }) => {
//   const currentDate = new Date().toLocaleString("default", {
//     month: "long",
//     day: "numeric",
//   });

//   return (
//     <header className="header">
//       <div className="header__logo">
//         <NavLink exact="true" to="/">
//           <div>
//             <img src={Logo} alt="logo"></img>
//           </div>
//         </NavLink>
//         <div className="header__date">{currentDate}, Greenville </div>
//       </div>
//       <div className="header__avatar">
//         <div className="header__slider"></div>
//         <ToggleSwitch />
//         <div>
//           <button
//             className="header__button"
//             type="text"
//             onClick={onCreateModal}
//           >
//             + Add clothes
//           </button>
//         </div>
//         <NavLink to="/profile">
//           <div className="header__name">Dale Hemli</div>
//         </NavLink>
//         <NavLink path="/profile">
//           <div className="header__avatar">
//             <img
//               className="header__avatar-image"
//               src={Avatar}
//               alt="avatar"
//             ></img>
//           </div>
//         </NavLink>
//       </div>
//     </header>
//   );
// };

// export default Header;

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
