import React from 'react'; 
import { Route, Link, useLocation }
from "react-router-dom"; 
import Activities from './Activities'; 
import Trips from './Trips'; 
import campPhoto from '../img/camp-photo.jpeg';
import boatPhoto from '../img/about/boattoisland.jpeg';
import boathouse from '../img/about/boathouse2.jpeg';
import dock from '../img/about/dock.jpeg';
import sunset from '../img/about/sunset.jpeg';


const CampLife = () => {

	return ( 
		<div className="body"> 
			<h1>Pine Island Camp</h1> 

			<div className='centered-content'>
			

				<h3> The more you learn about this
				magical place, the less surprising you will find the fact that
				it all happens on a tiny wooded island in a pristine, quiet
				lake in central Maine. 
				</h3> 
			</div>
			<div className="centered-image" style={{ backgroundImage: `url(${campPhoto})` }} />

			
				

			
			<div className='centered-content'>

			<h3>
			Today, with hundreds of summer programs available, a summer at Pine Island remains very much as it was a century ago and intentionally different from most camp experiences.
			</h3>
				

				<p>
				Whether your son is shy or gregarious, big or small, this camp will challenge him to be at his best in the varied circumstances of simple outdoor living, albeit under the close supervision of our caring staff. Generations of Pine Islanders have found their summers at camp to be among the most meaningful of their lives.
				</p>
				<p>
				 A season at Pine Island is designed to help boys ages nine to fifteen develop self-confidence: campers have the independence to make substantial choices, the support of a community built on shared values, and enough time away to feel both truly on their own and an integral part of the community they've helped create. 
				</p>

			</div>
			<div className="about-photo" style={{ backgroundImage: `url(${boatPhoto})` }} />

			<div className='centered-content'>
				<h2>Our Mission</h2>
				<h3>
				Our mission is to give boys an adventurous, happy, and safe summer experience in an atmosphere that increases self-confidence, broadens knowledge, and strengthens character. 
				</h3>
				<p>To this end, Pine Island Camp keeps its enrollment small, its program varied and imaginative, and its life simple, unplugged, and close to nature. In this age of cell phones, computers, and social media, a summer at Pine Island offers boys the opportunity to grow in physical skills, imagination, and self-confidence, away from the screens and clamor that dominate our world. We believe it is self-confidence above all that promotes the growth of all the other qualities that we want for our children, including independence coupled with a concern for others, honesty, generosity, a sense of humor, and the ability to find joy in life.
				</p>
			</div>

			<div className="about-photo" style={{ backgroundImage: `url(${boathouse})` }} />

			<div className='centered-content'>
				<h2>A Full Season Experience</h2>
				<p>	[[Whether your son is shy or gregarious, big or small, this camp will challenge him to be at his best in the varied circumstances of simple outdoor living, albeit under the close supervision of our caring staff. Generations of Pine Islanders have found their summers at camp to be among the most meaningful of their lives.]]
				</p>
			</div>

			<div className="about-photo" style={{ backgroundImage: `url(${dock})` }} />

			<div className='centered-content'>
				<h2>Over 100 Years of Building Confidence</h2>
				<h3>
					At Pine Island Camp our first consideration is the safety of our campers and staff. We have an excellent safety record spanning more than 110 summers. 
				</h3>
				<p>
				At least one counselor with the rigorous Wilderness First Responder certification staffs every camping trip, and all trip leaders are certified by the State of Maine and receive additional training at Pine Island during the week before camp opens. While we send cell phones on trips with the staff, we train our counselors to be able to handle virtually any situation independently. Boys and staff wear lifejackets every time they step into a boat – in camp or on trips. No camper is ever allowed out in a boat or in the lake without supervision. We travel in leased, state-of-the-art vans with approved drivers. Our medic lives on the island in the infirmary and is available at all times. We monitor the weather, and our emergency procedures are clear and understood by every member of the staff.
				</p>
			</div>

			<div className="about-photo" style={{ backgroundImage: `url(${sunset})` }} />
		</div>


		)} 

export default CampLife;