import React from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";

import pic1 from "../img/pic1.jpeg";

const ActivityList = () => {
  return (
    <div>
      <div className="activity-list slide">
        <h1 style={{ align: "center" }}>Activities</h1>
        <p>
          Activites are the core of daily life on Pine Island. Each morning,
          campers sign up for two activites - morning and afternoon. Below is a
          list of activites and an explanation of each one.
        </p>
        <Link to="#">
          <div
            className="activity-img"
            style={{ backgroundImage: `url(${pic1})` }}
          ></div>
        </Link>

        <Link to="#">
          <div
            className="activity-img"
            style={{ backgroundImage: `url(${pic1})` }}
          ></div>
        </Link>

        <div
          className="activity-img"
          style={{ backgroundImage: `url(${pic1})` }}
        />

        <div
          className="activity-img"
          style={{ backgroundImage: `url(${pic1})` }}
        />

        <div
          className="activity-img"
          style={{ backgroundImage: `url(${pic1})` }}
        />
      </div>
    </div>
  );
};

export default ActivityList;
