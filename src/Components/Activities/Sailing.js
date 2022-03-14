import React from "react";
import { Link } from "react-router-dom";
import sailing from '../../img/activities/sail7.jpeg';

const Sailing = () => {
  return (
    <div className='activity-wrapper'>
         <div className='activity-content'>
           <Link to="/activities">{'<'} Back to Activities</Link>
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
  );
};

export default Sailing;
