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
      style={{backgroundColor: pos === "top" ? "rgba(11,11,67, 0.5)" : "rgba(11,11,67, 0.5)", 
              // boxShadow: pos === "top" ? "none": "0px 0px 20px rgba(0, 0, 0, .6)",
              position: "fixed"  }}>

      <Link to="/" className='logo-link-tag'>
        <img src={pathname === '/' && pos === 'top' ? logo : logo} 
        className={pathname === '/' && pos === 'top' ? 'logo' : 'logo'} />
      </Link>

      <div className={pathname === "/" && pos === 'top' ? "nav-links-home" : "nav-links-home"}>
        <Link to="/camp-life" className="link">
          CAMP LIFE
        </Link>

        <Link to="/activities" className="link">
          ACTIVITIES
        </Link>

        <Link to="/trips" className="link">
          TRIPS
        </Link>

        <Link to="/families" className="link">
          FAMILIES
        </Link>

        <Link to="/staff" className="link">
          STAFF
        </Link>

        <Link to="/alumni" className="link">
          ALUMNI
        </Link>

        <Link to="/blog" className="link">
          BLOG
        </Link>

        <Link to="/contact" className="link">
          CONTACT
        </Link>

        <a href={'https://pineisland.campintouch.com/v2/family/inquiryForm.aspx'} target='#' className='button-link' rel={'external'}>
          <button>REQUEST INFO</button>
        </a>

        <a href={'https://pineisland.campintouch.com/ui/forms/application/camper/App'} target='#' className='button-link'>
          <button>APPLY</button>
        </a>
      
        <Link to='/donate' className='button-link-dark'>
          <button className='donate-button'>DONATE</button>
        </Link>

      </div>
    </div>
  );
};

export default Header;
