import React from "react";
import { Link } from "react-router-dom";
import canoe1 from '../../img/activities/canoe-trip.jpeg';
import canoe2 from '../../img/activities/canoe.jpeg';
import canoe3 from '../../img/activities/canoe2.jpeg';
import canoe4 from '../../img/activities/canoe3.jpeg';
import canoe5 from '../../img/activities/canoe4.jpeg';
import canoe6 from '../../img/activities/canoe5.jpeg';
// import ImageMasonry from 'react-image-masonry';
// import MasonryList from "react-native-masonry-list";


const Canoeing = () => {

  return (
    <div className='activity-wrapper'>
         <div className='activity-content'>
           <Link to="/activities">{'<'} Back to Activities</Link>
           <h1>Canoeing & Kayaking</h1>
           <p>
            The state of Maine is filled with rivers and lakes, and canoeing or kayaking are some of the best ways to explore these waterways. As a Pine Islander, boys will learn the various strokes required to navigate a canoe through any type of conditions - as well as techniques for safety and rescue.
            </p>
            <p>
            Campers will start out practicing on Great Pond, and soon will earn the ability to go out on trips that last up to  7 days,. Pine Island offers trips of varying length and difficulty throughout the summer, so there is sure to be something for everyone. 
           </p>
         </div>
         <div className='activity-gallery'>
            <img src={canoe2} />
            <img src={canoe3} />
            <img src={canoe4} />
            <img src={canoe5} />
            <img src={canoe6} />

          </div>      
    </div>
  );
};

export default Canoeing;
