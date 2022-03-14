import React from "react";
import { Link } from "react-router-dom";
import archery1 from '../../img/activities/archery.jpeg';
import archery2 from '../../img/activities/archery2.jpeg';
import archery3 from '../../img/activities/archery3.jpeg';

const Archery = () => {
  return (
    <div className='activity-wrapper'>
      <div className='activity-content'>
        <Link to="/activities">{'<'} Back to Activities</Link>
        <h1>Archery</h1>
        
        <p>In riflery and archery, the standards of marksmanship, safety, and 
        instruction are the highest. </p>
        <p>
         As in other activities, both programs offer the 
        opportunity to earn rankings and insignia, but the emphasis is on each boy's 
        improvement of his own record rather than constant competition with others.
        </p>
      </div>
      <img src={archery2} />
    </div>
  );
};

export default Archery;
