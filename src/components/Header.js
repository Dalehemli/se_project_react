import "../blocks/Header.css";
import Logo from "../images/logo.svg";
import Avatar from "../images/avatar.svg";

const Header = ({ onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          {" "}
          <img src={Logo} alt="Logo" />{" "}
        </div>
        <div className="header__date">{currentDate}, Greenville</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            {" "}
            + Add Clothes
          </button>
        </div>
        <div className="header__name">Dale Hemli</div>
        <div className="header__avatar">
          <img className="header__avatar-image" src={Avatar} alt="Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
