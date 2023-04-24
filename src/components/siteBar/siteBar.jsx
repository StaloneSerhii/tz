import { NavLink } from "react-router-dom";
import "./siteBar.css";

const SiteBar = () => {
  return (
    <div className="header">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/tweets"}>Tweets</NavLink>
    </div>
  );
};

export default SiteBar;
