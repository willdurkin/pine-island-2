import React from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import pic1 from "../../img/pic1.jpeg";

const Activities = () => {
  return (
    <div>
      <h1>Activities</h1>
      <div className="activity-list slide">
        <p>
          Activites are the core of daily life on Pine Island. Each morning,
          campers sign up for two activites - morning and afternoon. Below is a
          list of activites and an explanation of each one.
        </p>
        <Link
          to="/activities/sailing"
          className="activity-img"
          style={{ backgroundImage: `url(${pic1})` }}
        />

        <Link
          to="/activities/sailing"
          className="activity-img"
          style={{ backgroundImage: `url(${pic1})` }}
        />

        <Link
          to="/activities/sailing"
          className="activity-img"
          style={{ backgroundImage: `url(${pic1})` }}
        />

        <Link
          to="/activities/sailing"
          className="activity-img"
          style={{ backgroundImage: `url(${pic1})` }}
        />

        <Link
          to="/activities/sailing"
          className="activity-img"
          style={{ backgroundImage: `url(${pic1})` }}
        />
      </div>
    </div>
  );
};

export default Activities;
