import React from "react";
import { Link } from "react-router-dom";
import woodcraft from '../../img/activities/woodcraft3.jpeg';

const Woodcraft = () => {
  return (
    <div className='activity-wrapper'>
         <div className='activity-content'>
           <Link to="/activities">{'<'} Back to Activities</Link>
           <h1>Woodcraft</h1>
           <p>
           Pine Island's woodcraft program teaches boys the basic camping skills they'll need on our many trips. Boys can learn basic axemanship, fire building, first aid, emergency shelter construction, leave-no-trace techniques and much more.
           </p> 
           <p>Achievement in woodcraft at Pine Island culminates in the Maine Woodsman and Junior Maine Woodsman certification program, which includes in-camp instruction, followed by a supervised 3-day trip where campers construct their own sleeping shelters, cook all the food themselves, and pass numerous examinations in essential camping skills.

            </p>
         </div>
         <img src={woodcraft} />
    </div>
  );
};

export default Woodcraft;
