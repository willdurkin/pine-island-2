import React, { useState, useEffect } from "react";
import { Route, Link, useLocation } from "react-router-dom";
import logo from "../img/pic-logo-white.png";
import logoBlue from "../img/pic-logo-blue.png";

const Header = () => {
  const { pathname } = useLocation();
  const [pos, setPos] = useState("top")

  const windowHeight = window.innerHeight

  useEffect (()=>{
      document.addEventListener("scroll", () => {
          const scrolled = window.scrollY;
          if (scrolled > windowHeight){
             setPos("moved")
          } else {
             setPos("top")
          }
      })
  },[windowHeight])


  return (
    <div 
      className="nav" 
      style={{backgroundColor: pos === "top" ? "rgba(0, 0, 0, 0)" : "#fff", 
              boxShadow: pos === "top" ? "none": "0px 0px 20px rgba(0, 0, 0, .6)",
              position: pathname === '/' ? "fixed" : 'absolute' }}>

      <Link to="/">
        <img src={pathname === '/' && pos === 'top' ? logo : logoBlue} 
        className={pathname === '/' && pos === 'top' ? 'big-logo' : 'logo'} />
      </Link>

      <div className={pathname === "/" && pos === 'top' ? "nav-links-home" : "nav-links"}>
        <Link to="/activities" className="link">
          CAMP LIFE
        </Link>
        <Link to="/trips" className="link">
          MISSION & VALUES
        </Link>
        <Link to="/activities" className="link">
          STAFF
        </Link>
        <Link to="/blog" className="link">
          FAMILIES
        </Link>
        <Link to="/activities" className="link">
          ALUMNI
        </Link>
        <Link to="/activities" className="link">
          CONTACT
        </Link>
        <button>DONATE</button>
        <button>REQUEST INFO</button>
      </div>
    </div>
  );
};

export default Header;
