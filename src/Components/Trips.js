import React from 'react';
import canoe from '../img/activities/canoe-trip3.jpeg';
import hike6 from '../img/trips/hike3.jpeg';
import hike8 from '../img/trips/hike8.jpeg';
import hike1 from '../img/trips/katahdin.jpeg';
import hike9 from '../img/trips/hike9.jpeg';


import canoe1 from '../img/trips/canoe-trip.jpeg';
import canoe2 from '../img/trips/canoe-trip1.jpeg';
import canoe3 from '../img/trips/canoe-trip3.jpeg';
import canoe4 from '../img/trips/canoe-trip2.jpeg';
import canoe5 from '../img/trips/canoe-trip5.jpeg';

import whitehead from '../img/trips/whitehead.jpeg';
import fishing from '../img/trips/fishing-trip.jpeg';

import woodsman from '../img/trips/woodsman.jpeg';


const Trips = () => {

	return (
		<div className='body'>
			<h1 style={{ align: "center" }}>Take the Trip of a Lifetime</h1>
			<div className="centered-content">
		        <h3>
		          Spending time on the trail and water teaches our boys self-reliance and community cooperation. Trips are chosen with guidance from the staff to ensure a good match between ability level and challenge. 
		         </h3>
			</div>

			<div className="about-photo" style={{ backgroundImage: `url(${hike6})` }} ></div>

			<div className='activity-list slide'>
		        <h1>Hiking Trips</h1>
		        <h3>
		         Over half of Pine Island's camping trips are backpacking trips, and most are designed to summit one or several mountains in Maine or New Hampshire. Younger boys camp at the base of mountains like Saddleback or Mt. Washington and day hike to the summit without packs. Older boys carry their packs from campsite to campsite, on routes that take them over summits and along ridges above the tree line.
		         </h3>
		        
		         <h3>
		         A typical summer includes the following hiking trips, among others:
		        </h3>
		    </div>
		    <div className='activity-wrapper'>
		       	<div className='activity-content'>
		       		<h3>Beginner Hikes</h3>
		        	<p><strong>Bald Pate:</strong> three-day hike on the Appalachian Trail for beginning hikers.
		        	</p>
		        	<p><strong>Saddleback:</strong> three-day hike on Saddleback Mountain for beginning hikers. Campers spend the night at Piazza Rock campground on the Appalachian Trail.
					</p>
					<p><strong>Bigelow:</strong> three-day hike on Mt. Bigelow. Campers hike over the mountain with packs and end at Flagstaff Lake. For beginning hikers.
					</p>
					<p><strong>Mt. Washington:</strong> three-day hike up Mt. Washington for beginning hikers.
					</p>
				</div>
				<img src={hike9} />
			</div>

			<div className='activity-wrapper'>
				<img src={hike1} />

				<div className='activity-content'>
					<h3>Intermediate Hikes</h3>
					<p>
						<strong>Carter-Moriah:</strong> four-day hike in the White Mountains for intermediate hikers.
					</p>
					<p>
						<strong>Northern Peaks:</strong> four-day hiking trip on the Appalachian Trail following the Presidential Peaks north of Mt. Washington. For intermediate hikers.
					</p>
					<p>
						<strong>Flag Big Flag:</strong> four-day adventure in the War Yacht, a 28-foot canoe that can be paddled or sailed. Campers paddle on Flagstaff Lake to the base of Mt. Bigelow. They ascend Mt. Bigelow, spending one night on the mountain, and then paddle back the length of Flagstaff Lake. This trip is for intermediate paddlers/hikers.
					</p>
					<p>
						<strong>Maine Peaks:</strong> five-day hike following the Appalachian Trail from Saddleback to Sugarloaf. For advanced hikers.
					</p>
					<p>
						<strong>Junior Katahdin:</strong> three-day hike for intermediate hikers who ascend Katahdin without packs.
					</p>
				</div>
			</div>
			<div className='activity-wrapper'>
				<div className='activity-content'>
					<h3>Advanced Hikes</h3>
					<p>
						<strong>Senior Katahdin:</strong> five-day hike for advanced hikers on Maine's tallest mountain.
					</p>
					<p>
						<strong>Senior Whites:</strong> seven-day trip from Franconia Notch to Pinkham Notch. Campers summit Mt. Lafeyette, Webster, and the Presidentials. For advanced hikers.
					</p>
					<p>
						<strong>Cliffhanger:</strong> four-day trip in the White Mountains from Ethan Pond to the Kangamangus Highway including Mt. Guyot and Mt. Bond. For intermediate hikers.
					</p>
					<p>
						<strong>Old Speck</strong> four-day hike following the Appalachian Trail through Mahoosuc Notch in New Hampshire and Maine. For advanced hikers.
					</p>
					<p>
						<strong>Lafayette's March:</strong> five-day hiking trip in the White Mountains with packs. For intermediate hikers.
					</p>
					<p>
						<strong>Founding Fathers:</strong> 3-day hike in the Presidential Range of the White Mountains for intermediate hikers.
					</p>
		      	</div>
		      	<img src={hike8} />
		     </div>

		    <div className="gif" style={{ backgroundImage: `url(${canoe1})` }} ></div>

		    <div className='activity-list slide'>
		        <h1>Canoe, Kayak and Rowing Trips</h1>
		        	<h3>
		        	Pine Islanders paddle all the major rivers in Maine and several of its lakes in either canoes or kayaks. At least two trips a year are rowing trips on which boys row double-banked in Pine Island's custom-designed wooden rowboats. Like hiking trips, water trips vary greatly in length and difficulty so that boys of all ages can enjoy them.
		        	</h3>
		        	<h3>
					A typical summer includes the following canoe, kayak and rowing trips, among others:
					</h3>
			</div>
			<div className='activity-wrapper'>
				<div className='activity-content'>
					<h3>Beginner Trips</h3>
					<p>
					<strong>Indian Pond:</strong> three-day canoe trip from Moosehead Lake to Indian Pond for beginning paddlers.
					</p>
					<p>
					<strong>Oak Island:</strong> two-day, one-night introduction to camping. Campers take the War Yacht on Great Pond to neighboring Oak Island.
					</p>
					<p>
					<strong>St. Johnson:</strong> 3-day kayak trip on the St. John River. Three of Pine Island's most experienced trip leaders, Walker McDonald, Noah Brodsky, and Pope Johnson, scouted this trip in the spring of 2019 and reported back that the river is beautiful and filled with moose.
					</p>
					<p>
					<strong>Clauson's:</strong> This 3-day trip does not include the Clauson River nor is it named after Claussen pickles. Several years ago, Pine Island alum Thomas Clauson and his father, alum and board member Henry Clauson, paddled the Kennebago River and determined it to be a great trip for campers. Over the past few summers it has proven to be just that, with beginner to intermediate paddlers gaining tripping experience and catching salmon, brook trout, and bass along the way.
					</p>
				</div>
				<img src={canoe2} />
			</div>
			<div className='activity-wrapper'>
				<img src={canoe5} />
				<div className='activity-content'>
					<h3>Intermediate Trips</h3>
					
					<p>
					<strong>West Branch</strong> four-day canoe trip on the West Branch of the Penobscot River. For intermediate paddlers.
					</p>
					
					<p>
					<strong>Kennessassabackscot:</strong> Campers paddle the Kennebec to Swan Island, then navigate the Sasanoa, Back, and Sheepscot Rivers to Wiscasset. Three-day trip for beginning paddlers.
					</p>
					<p>
					<strong>Great Pond Rowing Trip:</strong> An exploration of Great Pond in rowboats. For beginning and intermediate rowers.
					</p>
					<p>
					<strong>Chip Lakes:</strong> four-day trip in canoes on the Chiputneticook Lakes, the headwaters of the Saint Croix River. For intermediate paddlers.
					</p>
					<p>
					<strong>CLIK:</strong> Chip Lakes In Kayaks - four-day trip on Chiputneticook Lakes. For intermediate kayakers.
					</p>
				</div>
			</div>

			<div className="gif" style={{ backgroundImage: `url(${canoe3})` }} ></div>


			<div className='activity-wrapper'>
				<div className='activity-content'>
					<h3>Advanced Trips</h3>
					<p>
					<strong>Senior Canoe:</strong> six-day trip on the Allagash Wilderness Waterway, from the Churchill dam at the head of the Allagash River to Allagash Village. For advanced paddlers.
					</p>
					<p>
					<strong>ONG-BAK</strong> O.A.R. Navigators Going Backward Along the Kennebec - a trip from Waterville to Bath Iron Works for advanced rowers.
					</p>
					<p>
					<strong>St. Croix:</strong> four-day canoeing adventure on St. Croix River from Vanceboro to the Kellyland dam. For intermediate to advanced paddlers.
					</p>
					
					<p>
					<strong>I.P.I.K.:</strong> Indian Pond in Kayaks - a 3-day trip for beginner to intermediate paddlers. Campers spend one day kayaking down the west outlet of the Kennebec River and two days paddling on Indian Pond.
					</p>
				</div>

				<img src={canoe4} />
			</div>

			<div className="gif" style={{ backgroundImage: `url(${whitehead})` }} ></div>

			<div className=' centered-content'>
				<h1>Whitehead Island</h1>
				<h3>Although most of our trips take us inland to the unspoiled lakes, rivers, and mountains of Maine and New Hampshire, all Pine Islanders also have the opportunity to explore Whitehead Island, a 90-acre island in the center of one of the most acclaimed stretches of coast in the United States.</h3>
				<p>
				 Pine Island Camp leases buildings and property from the Swan family for a month each summer and Pine Island owns part of the island on which it owns a number of historic buildings, including a granite lighthouse and the light keeper's house, so the boys and counselors have the run of the entire island during their stay. Groups of Pine Islanders go to Whitehead for four days at a time to explore the rocky shoreline, learn about the biology of the large intertidal zone, play games, learn knot-tying, dig for clams, and search for other wild edibles under the expert guidance of the Whitehead program director.
				</p>
			</div>

			<div className="gif" style={{ backgroundImage: `url(${fishing})` }} ></div>

			<div className='centered-content'>
				<h1>Fishing Trips</h1>
				<h3>
				For campers who are enthusiastic fishermen, we offer both day and overnight trips on which boys are able to use the fly-fishing skills they've learned in camp in some more remote locations. Some campers catch fish using flies they tie themselves.
				</h3>
				<h3>
					A typical summer includes the following fishing trips, among others:
				</h3>
				<p>
					I.P.F.D. - 3-day fishing trip on Indian Pond and the east outlet of the Kennebec River. Great spot for salmon, brook trout, lake trout, and bass.
				</p>
				<p>
					Big Eddy - Designed and led by Doug Faherty, parent of long-time Pine Islander Jack Faherty, this 3-day trip takes campers and fly-fishing instructors to the "Big Eddy" on the Penobscot River. Pine Islanders have caught many brook trout and salmon on this trip, including a 20+" salmon that had onlookers ogling.
				</p>
			</div>

	{/*		<div className="gif" style={{ backgroundImage: `url(${woodsman})` }} ></div>

			<div className='centered-content'>
				<h1>Appalachian Trail Work Trip</h1>
				<p>
				Pine Island Camp has been a volunteer maintainer on the Appalachian Trail since the 1950s. Boys sign up for our annual ATC trip early in the summer and spend three days based at Pierce Pond. They clear the five-mile section of trail from Pierce Pond to the Kennebec River.
				</p>
			</div>*/}

			<div className="gif" style={{ backgroundImage: `url(${woodsman})` }} ></div>

			<div className='centered-content'>
				<h1>Maine Woodsman</h1>
				<p>
				Achievement in woodcraft at Pine Island culminates in the Maine Woodsman and Junior Maine Woodsman certification program, which includes in-camp instruction, followed by a supervised three-day trip to Pine Island's Norridgewock camp site. Before leaving Pine Island, campers create a meal plan and prepare their own gear for the trip. At the camp site, campers construct their own sleeping shelters, cook all the food themselves, and pass numerous examinations in essential camping skills.
				</p>
			</div>

				<div className="gif" style={{ backgroundImage: `url(${canoe3})` }} ></div>

				<div className='centered-content'>
					<h1>Expedition Camp</h1>
					<p>
					Fifteen-year-old campers at Pine Island have the option of participating in our traditional camp program, which offers rigorous senior camping trips and the opportunity to achieve the highest level of skill development in the camp activities that interest them. For fifteen- and sixteen-year-olds who are looking for a new opportunity and leadership training, we offer Expedition Camp, an intensive program that teaches boys trip planning and takes them on extended camping trips. Boys need not have attended Pine Island previously to enjoy Expedition Camp.
					</p>
					<p>
					Led by two experienced counselors, Expedition Campers train for and complete two long camping trips. In the past the first trip has been a 13-day canoe trip on the Penobscot, Allagash and St. John Rivers. The second has been a 13-day hike on Vermont's Long Trail. In between, Expedition Campers have participated in regular activities at Pine Island and completed Wilderness First Aid training and a five-day service project either on Whitehead Island or on Great Pond.
					</p>
					<p>
					While at Pine Island, Expedition Campers and their counselors live near the landing on the camp's mainland property. They are housed in two recently renovated cabins; one is a bunkhouse and the other serves as a facility for gathering, planning and socializing.
					</p>
					<p>
					A key component of the Expedition Camp program is leadership training. Boys are given the opportunity to lead the group several times on their trips. Their leadership skills are critiqued during the trip by the trip leaders. It is the first step many boys take toward eventually becoming effective counselors at Pine Island.
					</p>
		      </div>
		 </div>
	)
}

export default Trips