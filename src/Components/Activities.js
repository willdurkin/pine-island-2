import React from 'react';
import canoe from '../img/activities/canoe3.jpeg';
import canoe1 from '../img/activities/canoe-trip.jpeg';
import canoe2 from '../img/activities/canoe.jpeg';
import canoe3 from '../img/activities/canoe2.jpeg';
import canoe4 from '../img/activities/canoe3.jpeg';
import canoe5 from '../img/activities/canoe4.jpeg';
import canoe6 from '../img/activities/canoe6.jpeg';
import archery2 from '../img/activities/archery2.jpeg';
import archery from '../img/activities/archery.jpeg';
import fishing from '../img/activities/fishing1.jpeg';
import rowing from '../img/activities/row2.jpeg';
import sailing from '../img/activities/sail7.jpeg';
import shop from '../img/activities/woodshop2.jpeg';
import swimming from '../img/activities/swim2.jpeg';
import tennis from '../img/activities/tennis2.jpeg';
import woodcraft from '../img/activities/woodcraft3.jpeg';
import fishing1 from '../img/activities/fishing.jpeg';
import regatta from '../img/activities/regatta.jpeg';
import sail2 from '../img/activities/sail3.jpeg';
import woodshop2 from '../img/activities/woodshop5.jpeg';


const Activities = () => {

	return (
		<div>
			{/*<div className="gif" style={{ backgroundImage: `url(${regatta})` }} >
			  <h2>Activites</h2>
			</div>*/}

			<div className="activity-list slide">
		        <h1 style={{ align: "center" }}>Find your new favorite activity</h1>
		        <h2>
		          Learn to sail, perfect your cast, roll a kayak, swim around the island,
		           hit the bullseye, or star in the Saturday Night Show.
		           Activites are the center of daily life on Pine Island. 
		           Each day is a chance to try something new!
		        <br></br>
		        <br></br>
		          Pine Island offers two two-hour activity periods each day, and right after breakfast boys are allowed to choose the activities they will take that day. Our program is designed to allow enough time in each activity period for focused instruction and, in boating activities, the opportunity to venture out across the lake on outings that combine instruction with adventure. Our activities offer the opportunity for boys to earn rankings, but the emphasis is on each boy's improvement of his own skills rather than on competition with others.
		        </h2>
			 </div>


			<div className="gif" style={{ backgroundImage: `url(${regatta})` }} ></div>


		 <div className='activity-wrapper'>
		      <div className='activity-content'>

		        <h1>Canoeing & Kayaking</h1>
		        <p>
		         The state of Maine is filled with rivers and lakes, and canoeing or kayaking are some of the best ways to explore these waterways. As a Pine Islander, boys will learn the various strokes required to navigate a canoe through any type of conditions - as well as techniques for safety and rescue.
		         </p>
		         <p>
		         Campers will start out practicing on Great Pond, and soon will earn the ability to go out on trips that last up to  7 days,. Pine Island offers trips of varying length and difficulty throughout the summer, so there is sure to be something for everyone. 
		        </p>
		      </div>

		      <img src={canoe6} />

		   {/*   <div className='activity-gallery'>
		         <img src={canoe2} />
		         <img src={canoe3} />
		         <img src={canoe4} />
		         <img src={canoe5} />
		         <img src={canoe6} />

		       </div>      */}
		 </div>

		 <div className='activity-wrapper'>
		      <img src={rowing} />
		      <div className='activity-content'>
		        <h1>Rowing</h1>
		        <p>
		         Handling a rowboat becomes second nature to almost every Pine Islander. Sound rowing technique is the first step to good seamanship, and rowing is a source of pleasure and exercise unknown to the youth who lives with an outboard at his back. Our rowing fleet includes nine wooden boats custom designed and built for PIC, and a single scull. As with all boating activities, life jackets are required at all times.
		        </p>
		      </div>
		 </div>

		 <div className="gif" style={{ backgroundImage: `url(${canoe})` }} />

		 <div className='activity-wrapper'>
		      <div className='activity-content'>
		        <h1>Sailing</h1>
		        <p>
		         Hundreds of boys have learned to sail at Pine Island. Great Pond is a large lake, 32 miles around, with islands and bays that invite sailing excursions. The sailing program is designed to accommodate absolute novices, who increase in rank with the staff's guidance. Pine Island has a large and varied fleet of sailboats.
		         </p>
		         <p>
		         It is in one of our two wooden custom built 12 1/2-foot catboats that a novice sailor can learn to handle the main sheet and the tiller before he moves on to one of our four custom built smaller boats. These boats, called Bezumarangs, are small, easy to operate and very forgiving, so they are ideal for intermediate sailors.
		        </p>
		      </div>
		      <img src={sailing} />
		 </div>

		 <div className='activity-wrapper'>
		 	<img src={archery} />
		    <div className='activity-content'>
		       <h1>Riflery & Archery</h1>
		      
		       <p>In riflery and archery, the standards of marksmanship, safety, and 
		       instruction are the highest. </p>
		       <p>
		       As in other activities, both programs offer the 
		       opportunity to earn rankings and insignia, but the emphasis is on each boy's 
		       improvement of his own record rather than constant competition with others.
		       </p>
		    </div>
		  </div>

		 <div className="gif" style={{ backgroundImage: `url(${sail2})` }} />	

		 <div className='activity-wrapper'>
		      <img src={fishing} />
		      <div className='activity-content'>
		        <h1>Fishing</h1>
		        <p>
		         Great Pond is one of Maine's premier smallmouth bass fishing lakes, a perfect place for boys to learn to fish both with spinning gear and with fly rods.
		         </p>
		         <p> Fly fishing is offered as a full-fledged activity at Pine Island with a counselor dedicated to it. The camp owns a number of fly rods and reels and all the gear necessary for tying flies. During a typical fly fishing activity boys can learn the basics of fly casting or fly tying. Many boys have caught big bass on flies they have tied themselves.
		        </p>
		      </div>
		 </div>

		 <div className="gif" style={{ backgroundImage: `url(${fishing1})` }} />	

		<div className='activity-wrapper'>
		     <div className='activity-content'>
		       <h1>Swimming</h1>
		       <p>
		        An island is a natural place to learn water sports and skills. Pine Island makes the most of its environment and exposes boys to the basic keystones of competency and safety on the water as soon as they arrive at camp. Every boy is encouraged to strengthen his swimming skills at Pine Island. 
		        </p>
		        <p> The swimming program follows Red Cross standards and ranges from beginning courses to life-saving and basic rescue. Special attention is given to non-swimmers, and every boy is required to achieve the rank of beginner at a minimum. In addition to instructional periods, there are two general swim periods every day, during which three lifeguards are on duty.
		       </p>
		     </div>
		     <img src={swimming} />
		</div>


		<div className='activity-wrapper'>
			<img src={shop} />
		     <div className='activity-content'>
		       <h1>Workshop</h1>
		       <p>
		       Pine Island offers Workshop as a regular daily activity. The focus is on building simple, useful things out of wood, and in the process learning how to make things with your hands, using an array of hand tools.</p> 
		       <p>Absolute novices are welcome. Boys usually start with building a simple shelf and then move on to other, increasingly complex projects. Many boys have their first experience with tools and wood at Pine Island, and many have discovered the great satisfaction that making something beautiful and useful with your hands affords.

		       </p>
		     </div>
		</div>

		<div className="gif" style={{ backgroundImage: `url(${woodshop2})` }}> </div>	

		<div className='activity-wrapper'>
			<img src={tennis} />
		     <div className='activity-content'>
		       <h1>Tennis</h1>
		       <p>
		        We have two professionally maintained clay tennis courts on the mainland. Individual instruction gives confidence to the beginner, while coaching and a tennis ladder whet the skills of advanced players. 
		        </p>
		     </div>
		</div>	

		<div className='activity-wrapper'>
		     <div className='activity-content'>
		       <h1>Woodcraft</h1>
		       <p>
		       Pine Island's woodcraft program teaches boys the basic camping skills they'll need on our many trips. Boys can learn basic axemanship, fire building, first aid, emergency shelter construction, leave-no-trace techniques and much more.
		       </p> 
		       <p>Achievement in woodcraft at Pine Island culminates in the Maine Woodsman and Junior Maine Woodsman certification program, which includes in-camp instruction, followed by a supervised 3-day trip where campers construct their own sleeping shelters, cook all the food themselves, and pass numerous examinations in essential camping skills.

		        </p>
		     </div>
		     <img src={woodcraft} />
		</div>

		</div> /*end*/
	)
}

export default Activities