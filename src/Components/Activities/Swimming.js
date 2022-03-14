import React from "react";
import { Link } from "react-router-dom";
import swimming from '../../img/activities/swim2.jpeg';

const Swimming = () => {
  return (
    <div className='activity-wrapper'>
         <div className='activity-content'>
           <Link to="/activities">{'<'} Back to Activities</Link>
           <h1>Swimming</h1>
           <p>
            An island is a natural place to learn water sports and skills. Pine Island makes the most of its environment and exposes boys to the basic keystones of competency and safety on the water as soon as they arrive at camp. Every boy is encouraged to strengthen his swimming skills at Pine Island. 
            </p>
            <p> The swimming program follows Red Cross standards and ranges from beginning courses to life-saving and basic rescue. Special attention is given to non-swimmers, and every boy is required to achieve the rank of beginner at a minimum. In addition to instructional periods, there are two general swim periods every day, during which three lifeguards are on duty.
           </p>
         </div>
         <img src={swimming} />
    </div>
  );
};

export default Swimming;
