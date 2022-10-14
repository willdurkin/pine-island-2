import React, { useState, useEffect } from 'react';
import { Route, Link} from "react-router-dom";

import Sidebar from './Sidebar.js';
import Hamburger from 'hamburger-react'
import logo from "../img/pic-logo-white.png";

const MobileHeader = () => {

	const [isOpen, setOpen] = useState(false);

	return (
		<div>
			<div className='nav'>
				<Link to="/" >
					<img src={logo} 
						className='logo' 
						onClick={()=>{setOpen(false)}}
						/>
				</Link>
				<Hamburger 
					className='hamburger' 
					color='white' 
					size={24} 
					toggled={isOpen} 
					toggle={()=> setOpen( current => !current )} 

					/>
			</div>

			<Sidebar 
				open={isOpen}
				setOpen={setOpen}
			/>
		</div>
	)
}

export default MobileHeader;