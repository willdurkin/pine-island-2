import React from 'react';
import family from '../img/family.jpeg';
 
const Families = () => {

	return (
		<div className='body'>
			


				<h1>Families</h1>
				<div className="gif" style={{ backgroundImage: `url(${family})` }} ></div>
				<div className='centered-content'>
				<h3>FAQs</h3>
				<h3>Dates, Tuitions & Policies</h3>
				<h3>Reviews</h3>
				<h3>Daily Schedule</h3>
				<h3>Clothing and Equipment List</h3>
				<h3>Camp Store</h3>
				<h3>Directions and Place to Stay</h3>
			</div>
		</div>
	)
}

export default Families;