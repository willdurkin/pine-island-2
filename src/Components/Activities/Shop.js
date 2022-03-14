import React from "react";
import { Link } from "react-router-dom";
import shop from '../../img/activities/woodshop2.jpeg';

const Shop = () => {
  return (
    <div className='activity-wrapper'>
         <div className='activity-content'>
           <Link to="/activities">{'<'} Back to Activities</Link>
           <h1>Workshop</h1>
           <p>
           Pine Island offers Workshop as a regular daily activity. The focus is on building simple, useful things out of wood, and in the process learning how to make things with your hands, using an array of hand tools.</p> 
           <p>Absolute novices are welcome. Boys usually start with building a simple shelf and then move on to other, increasingly complex projects. Many boys have their first experience with tools and wood at Pine Island, and many have discovered the great satisfaction that making something beautiful and useful with your hands affords.

           </p>
         </div>
         <img src={shop} />
    </div>
  );
};

export default Shop;
