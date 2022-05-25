import React from 'react';
import { Route, Link, useLocation } from "react-router-dom";
import Activities from './Activities';
import Trips from './Trips';
import campPhoto from '../img/camp-photo.jpeg';


const CampLife = () => {

	return (
		<div className='page-wrap'>

			<div className="activity-list slide">
		        <h1 style={{ align: "center" }}>Camp Life</h1>
		        <h2>
		          The more you learn about this magical place, the less surprising you will find the fact that it all happens on a tiny wooded island in a pristine, quiet lake in central Maine.
		        <br></br>
		        <br></br>
		          We rely on each other for everything, from instruction to entertainment.

		        </h2>

		        <div className='subnav'>
		        	<h2>Sections:</h2>
		        	<Link to=''>Activities</Link>
		        	<Link to=''>Trips</Link>
		        	<Link to=''>Campfire & SNS</Link>
		        	<Link to=''>Expedition Camp</Link>
		        </div>
			 </div>

			<div className="camp-photo" style={{ backgroundImage: `url(${campPhoto})` }} ></div>

			<Activities />
			<Trips />

			

		</div> /*end*/
	)
}

export default CampLife;