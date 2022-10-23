import React, { useState } from "react";
import { Route, Link, useLocation } from "react-router-dom";
import nightSky from '../img/night-sky.gif';


const Sidebar = (props) => {

	return (
		<div 
			className={`${props.open === false ? "hide-mobile-nav" : "show-mobile-nav"} nav-links-mobile`} style={{ backgroundImage: `url(${nightSky})` }}
			 >
  
		  <Link 
		  	to="/camp-life" 
		  	className="link" 
		  	onClick={()=>{props.setOpen(false)}} 
		  	>
		    CAMP LIFE
		  </Link>

		  <Link to="/families" className="link" onClick={()=>{props.setOpen(false)}}>
		    FAMILIES
		  </Link>

		  <Link to="/activities" className="link" onClick={()=>{props.setOpen(false)}} >
		    ACTIVITIES
		  </Link>

		  <Link to="/trips" className="link" onClick={()=>{props.setOpen(false)}}>
		    TRIPS
		  </Link>

		  <Link to="/staff" className="link" onClick={()=>{props.setOpen(false)}}>
		    STAFF
		  </Link>

		  <Link to="/alumni" className="link" onClick={()=>{props.setOpen(false)}}>
		    ALUMNI
		  </Link>

		  <Link to="/blog" className="link" onClick={()=>{props.setOpen(false)}}>
		    BLOG
		  </Link>

		  <Link to="/contact" className="link" onClick={()=>{props.setOpen(false)}}>
		    CONTACT
		  </Link>
		  
		  <a href={'https://pineisland.campintouch.com/v2/family/inquiryForm.aspx'} 
		  	 target='#' 
		  	 className='button-link' 
		  	 rel={'external'} 
		  	 >
		    
		    <button onClick={()=>{props.setOpen(false)}}>REQUEST INFO</button>
		  </a>

		  <a 
		    href={'https://pineisland.campintouch.com/ui/forms/application/camper/App'} 
		    target='#' 
		    className='button-link' 
		    onClick={()=>{props.setOpen(false)}} >
		    
		    <button className='donate-button'>APPLY</button>
		  </a>
		  
		  <Link 
		  	to='/donate' 
		  	className='button-link-dark'
		  	onClick={()=>{props.setOpen(false)}}
		  	>
		    <button className='donate-button'>DONATE</button>
		  </Link>

		</div>
	)
}

export default Sidebar;