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



const ActivityList = () => {
  return (
    <div>
      <div className="activity-list slide">
        <h1 style={{ align: "center" }}>Find your new favorite thing to do</h1>
        <p>
          Activites are the core of daily life on Pine Island. Each morning,
          campers sign up for two activites - morning and afternoon. Below is a
          list of activites and an explanation of each one.
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

        <div
          className="activity-img"
          style={{ backgroundImage: `url(${fishing})` }}
        />

        <div
          className="activity-img"
          style={{ backgroundImage: `url(${rowing})` }}
        />
        
        <div
          className="activity-img"
          style={{ backgroundImage: `url(${sailing})` }}
        />

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

        <Link to="#">
          <div
            className="activity-img"
            style={{ backgroundImage: `url(${woodshop})` }}
          ></div>
        </Link>

      </div>
    </div>
  );
};

export default ActivityList;
