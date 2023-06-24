import avatar from "../images/avatar.svg";
import "../blocks/SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <img src={avatar} className="sidebar__avatar" alt={avatar} />
      <div className="sidebar__name">Dale Hemli</div>
    </div>
  );
}

export default SideBar;
