import React from "react";
import { Link } from "react-router-dom";
import fishing from '../../img/activities/fishing1.jpeg';

const Fishing = () => {
  return (
    <div className='activity-wrapper'>
         <div className='activity-content'>
           <Link to="/activities">{'<'} Back to Activities</Link>
           <h1>Fishing</h1>
           <p>
            Great Pond is one of Maine's premier smallmouth bass fishing lakes, a perfect place for boys to learn to fish both with spinning gear and with fly rods.
            </p>
            <p> Fly fishing is offered as a full-fledged activity at Pine Island with a counselor dedicated to it. The camp owns a number of fly rods and reels and all the gear necessary for tying flies. During a typical fly fishing activity boys can learn the basics of fly casting or fly tying. Many boys have caught big bass on flies they have tied themselves.
           </p>
         </div>
         <img src={fishing} />
    </div>
  );
};

export default Fishing;
