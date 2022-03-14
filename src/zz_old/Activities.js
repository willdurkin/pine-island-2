import React from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import pic1 from "../img/pic1.jpeg";
import archery from '../img/activities/archery.jpeg';
import canoe from '../img/activities/canoe3.jpeg';
import fishing from '../img/activities/fishing.jpeg';
import rowing from '../img/activities/row2.jpeg';
import sailing from '../img/activities/sail2.jpeg';
import tennis from '../img/activities/tennis.jpeg';
import woodcraft from '../img/activities/woodcraft.jpeg';
import woodshop from '../img/activities/woodshop.jpeg';

const Activities = () => {
  return (
    <div>
      <div className="activity-list slide">
        <h1 style={{ align: "center" }}>Choose a new skill to master every day</h1>
        <p>
          Learn to sail, perfect your cast, roll a kayak, swim around the island,
           paddle a canoe, or star in the Saturday Night Show.
           Activites are the center of daily life on Pine Island. Each day presents a new opportunity to try something new!
        </p>
        <Link to="#">
          <div
            className="activity-img"
            style={{ backgroundImage: `url(${archery})` }}
          ></div>
        </Link>

        <Link to="#">
          <div
            className="activity-img"
            style={{ backgroundImage: `url(${canoe})` }}
          ></div>
        </Link>

        <Link to='#'>
          <div
            className="activity-img"
            style={{ backgroundImage: `url(${fishing})` }}
          ></div>
        </Link>

        <Link to='#'>
          <div
            className="activity-img"
            style={{ backgroundImage: `url(${rowing})` }}
          ></div>
        </Link>
        
        <Link to='#'>
          <div
            className="activity-img"
            style={{ backgroundImage: `url(${sailing})` }}
          ></div>
        </Link>

        <Link to="#">
          <div
            className="activity-img"
            style={{ backgroundImage: `url(${tennis})` }}
          ></div>
        </Link>

        <Link to="#">
          <div
            className="activity-img"
            style={{ backgroundImage: `url(${woodcraft})` }}
          ></div>
        </Link>

        {/*<Link to="#">
          <div
            className="activity-img"
            style={{ backgroundImage: `url(${woodshop})` }}
          ></div>
        </Link>*/}
      </div>
    </div>
  );
};

export default Activities;
