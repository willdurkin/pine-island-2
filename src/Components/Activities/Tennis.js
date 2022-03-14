import React from "react";
import { Link } from "react-router-dom";
import tennis from '../../img/activities/tennis2.jpeg';

const Tennis = () => {
  return (
    <div className='activity-wrapper'>
         <div className='activity-content'>
           <Link to="/activities">{'<'} Back to Activities</Link>
           <h1>Tennis</h1>
           <p>
            We have two professionally maintained clay tennis courts on the mainland. Individual instruction gives confidence to the beginner, while coaching and a tennis ladder whet the skills of advanced players. 
            </p>
         </div>
         <img src={tennis} />
    </div>
  );
};

export default Tennis;
