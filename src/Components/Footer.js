import React from 'react';
import { Route, Link, useLocation } from "react-router-dom";


const Footer = () => {
	 return (
	 	<div className='footer'>

	 		<div className='site-map'>
		 		<div>
		 			<h3>About</h3>
		 			<Link to='/camp-life'>Camp Life</Link>
		 			<Link to='/activities'>Ativities</Link>
		 			<Link to='/trips'>Trips</Link>
		 			<Link to='/blog'>Blog</Link>
		 		</div>
		 		<div>
		 			<h3>Resources</h3>
		 			<Link to='/families'>Families</Link>
		 			<Link to='/alumni'>Alumni</Link>
		 			<Link to='/staff'>Staff</Link>
		 			<Link to='/contact'>Contact</Link>
		 			
		 		</div>
		 	</div>

	 		
	 		<div className='social'>
	 			<img src="https://www.transparentpng.com/thumb/logo-instagram/z75gfy-instagram-logo-png.png" alt="instagram logo png @transparentpng.com" />
	 			<img src="https://www.transparentpng.com/thumb/facebook-logo/facebook-icon-transparent-background-20.png" alt="facebook icon transparent background @transparentpng.com" />
	 			<img src="https://www.transparentpng.com/thumb/youtube-logo/transparent-youtube-logo-clipart-6.png" alt="Transparent Youtube Logo Clipart @transparentpng.com" style={{width:'45px'}}/>
	 		</div>

	 		<div className='camp-info'>
		 		<p>©2006-2022 Pine Island Camp | Sumner Ford, Director</p>
		 		<p>Summer address: Belgrade Lakes ME 04918 | telephone (207) 465 3031</p>
		 		<p>Winter address: PO Box 242 Brunswick ME 04011 | telephone (207) 465 3031</p>
		 		
		 	</div>
		 	<div className='centered-bottom'>
		 		<p>Pine Island Camp is a 501(c)(3) not-for-profit corporation</p>
		 	</div>

	 		
	 	</div>
	 )
}

export default Footer