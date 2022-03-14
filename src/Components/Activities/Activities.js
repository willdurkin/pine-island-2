import React from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import pic1 from "../../img/pic1.jpeg";
import archery from '../../img/activities/archery.jpeg';
import canoe from '../../img/activities/canoe3.jpeg';
import fishing from '../../img/activities/fishing.jpeg';
import rowing from '../../img/activities/row2.jpeg';
import sailing from '../../img/activities/sail2.jpeg';
import shop from '../../img/activities/woodshop.jpeg';
import tennis from '../../img/activities/tennis.jpeg';
import woodcraft from '../../img/activities/woodcraft.jpeg';
import swim from '../../img/activities/swim.jpeg'


const Activities = () => {
  return (
    <div>
      <div className="activity-list slide">
        <h1 style={{ align: "center" }}>Find your new favorite activity</h1>
        <h2>
          Learn to sail, perfect your cast, roll a kayak, swim around the island,
           hit the bullseye, or star in the Saturday Night Show.
           Activites are the center of daily life on Pine Island. 
           Each day is a chance to try something new!
        </h2>

        <Link to="/activities/archery" 
          className="activity-img">
          <div style={{ backgroundImage: `url(${archery})` }} 
          />
            <h3>Archery</h3>
            <p>Take aim at our range and master the art of archery. 
              We offer a range of traditional and compound bows. Your boy will be under
              the close supervision of our trained archery counselor.
            </p>
        </Link>

        <Link to="/activities/canoeing" 
          className="activity-img">
          <div style={{ backgroundImage: `url(${canoe})` }} 
          />
            <h3>Canoeing & Kayaking</h3>
            <p>Canoeing and kayaking instruction prepares campers for safe trips on lakes and rivers throughout Maine. Learn the different strokes required to paddle from the bow and stern.
            </p>
        </Link>

        <Link to="/activities/fishing" 
          className="activity-img">
          <div style={{ backgroundImage: `url(${fishing})` }} 
          />
            <h3>Fishing</h3>
            <p>Great Pond is one of Maine's premier smallmouth bass fishing lakes, a perfect place for boys to learn to fish both with spinning gear and with fly rods..
            </p>
        </Link>

        <Link to="/activities/rowing" 
          className="activity-img">
          <div style={{ backgroundImage: `url(${rowing})` }} 
          />
            <h3>Rowing</h3>
            <p>Handling a rowboat becomes second nature to almost every Pine Islander. Sound rowing technique is the first step to good seamanship, and rowing is a source of pleasure and exercise unknown to the youth who lives with an outboard at his back.
            </p>
        </Link>

        <Link to="/activities/sailing" 
          className="activity-img">
          <div style={{ backgroundImage: `url(${sailing})` }} 
          />
            <h3>Sailing</h3>
            <p>Hundreds of boys have learned to sail at Pine Island. Great Pond is a large lake, 32 miles around, with islands and bays that invite sailing excursions.
            </p>
        </Link>

        <Link to="/activities/swimming" 
          className="activity-img">
          <div style={{ backgroundImage: `url(${swim})` }} 
          />
            <h3>Swimming</h3>
            <p>Every boy is encouraged to strengthen his swimming skills at Pine Island. The swimming program follows Red Cross standards and ranges from beginning courses to life-saving and basic rescue.
            </p>
        </Link>

        <Link to="/activities/tennis" 
          className="activity-img">
          <div style={{ backgroundImage: `url(${tennis})` }} 
          />
            <h3>Tennis</h3>
            <p>We have two professionally maintained clay tennis courts on the mainland. Individual instruction gives confidence to the beginner, while coaching and a tennis ladder whet the skills of advanced players.
            </p>
        </Link>

        <Link to="/activities/woodcraft" 
          className="activity-img">
          <div style={{ backgroundImage: `url(${woodcraft})` }} 
          />
            <h3>Woodcraft</h3>
            <p>Pine Island's woodcraft program teaches boys the basic camping skills they'll need on our many trips. 
            </p>
        </Link>

        <Link to="/activities/workshop" 
          className="activity-img">
          <div style={{ backgroundImage: `url(${shop})` }} 
          />
            <h3>Workshop</h3>
            <p>Take aim at our range and master the art of archery. 
              We offer a range of traditional and compound bows. Your boy will be under
              the close supervision of our trained archery counselor.
            </p>
        </Link>

        {/*<Link to="#"
            className="activity-img"
            style={{ backgroundImage: `url(${canoe})` }}
        ><p>Canoeing</p></Link>

        <Link to='#'
          className="activity-img"
          style={{ backgroundImage: `url(${fishing})` }}
        ><p>Fishing</p></Link>

        <Link to='#'
          className="activity-img"
          style={{ backgroundImage: `url(${rowing})` }}
        ><p>Rowing</p></Link>
        
        <Link to='/activities/sailing'
          className="activity-img"
          style={{ backgroundImage: `url(${sailing})` }}
        ><p>Sailing</p></Link>

        <Link to="#"
            className="activity-img"
            style={{ backgroundImage: `url(${tennis})` }}
        ><p>Tennis</p></Link>

        <Link to="#"
            className="activity-img"
            style={{ backgroundImage: `url(${woodcraft})` }}
          ><p>Woodcraft</p></Link>

        <Link to="#"
            className="activity-img"
            style={{ backgroundImage: `url(${woodshop})` }}
          ><p>Woodshop</p></Link>*/}
      </div>
    </div>
  );
};

export default Activities;
