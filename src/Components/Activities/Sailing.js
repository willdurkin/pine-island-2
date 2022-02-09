import React from "react";
import { Link } from "react-router-dom";

const Sailing = () => {
  return (
    <div>
      <h1>Sailing</h1>
      <p>Sailing is good!</p>
      <Link to="/activities">Back to Activities</Link>
    </div>
  );
};

export default Sailing;
