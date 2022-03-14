import React from "react";
import { Link } from "react-router-dom";
import rowing from '../../img/activities/rowing2.jpeg';

const Rowing = () => {
  return (
    <div className='activity-wrapper'>
         <div className='activity-content'>
           <Link to="/activities">{'<'} Back to Activities</Link>
           <h1>Rowing</h1>
           <p>
            Handling a rowboat becomes second nature to almost every Pine Islander. Sound rowing technique is the first step to good seamanship, and rowing is a source of pleasure and exercise unknown to the youth who lives with an outboard at his back. Our rowing fleet includes nine wooden boats custom designed and built for PIC, and a single scull. As with all boating activities, life jackets are required at all times.
           </p>
         </div>
         <img src={rowing} />
    </div>
  );
};

export default Rowing;
