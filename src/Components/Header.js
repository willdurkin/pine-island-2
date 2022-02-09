import React from "react";
import { Route, Link, useLocation } from "react-router-dom";
import logo from "../img/pic-logo-white.png";
import logoBlue from "../img/pic-logo-blue.png";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="nav">
      <Link to="/">
        <img src={pathname === "/" ? logo : logoBlue} className="logo" />
      </Link>

      <div className={pathname === "/" ? "nav-links-home" : "nav-links"}>
        <Link to="#" className="link">
          CAMP TOUR
        </Link>
        <Link to="/activities" className="link">
          ACTIVITIES
        </Link>
        <Link to="#" className="link">
          TRIPS
        </Link>
        <Link to="#" className="link">
          STAFF
        </Link>
        <Link to="#" className="link">
          HISTORY & VALUES
        </Link>
        <button>APPLY NOW</button>
      </div>
    </div>
  );
};

export default Header;
