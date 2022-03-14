import React from 'react';
import canoe from '../img/activities/canoe-trip3.jpeg';

const Trips = () => {

	return (
		<div>
			<div className="activity-list slide">
		        <h1 style={{ align: "center" }}>Explore the Maine wilderness</h1>
		        <h2>
		          At any time during the summer, dozens of Pine Islanders are out on trips exploring points near and far across New England. Over 40 canoe, kayak, and hiking trips depart from Pine Island each summer, taking campers and counselors from the summits of Mt. Washington and Katahdin to the border waters between Maine and Canada.
		        </h2>
			 </div>

			 <div className="gif" style={{ backgroundImage: `url(${canoe})` }} ></div>


		</div> /*end*/
	)
}

export default Trips