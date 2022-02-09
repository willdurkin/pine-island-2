import React from "react";
import { Route, Routes, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Activities from "./Activities/Activities";
import Sailing from "./Activities/Sailing";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/sailing" element={<Sailing />} />
      </Routes>
    </main>
  );
};

export default Main;
