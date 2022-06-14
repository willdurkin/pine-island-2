import React from "react";
import { Route, Routes, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Activities from "./Activities";
import Archery from "./Activities/Archery";
import Canoeing from "./Activities/Canoe";
import Fishing from "./Activities/Fishing";
import Rowing from "./Activities/Rowing";
import Sailing from "./Activities/Sailing";
import Swimming from "./Activities/Swimming";
import Tennis from "./Activities/Tennis";
import Woodcraft from "./Activities/Woodcraft";
import Workshop from "./Activities/Shop";
import Blog from './Blog';
import Trips from './Trips';
import CampLife from './CampLife';
import Families from './Families';
import Staff from './Staff';
import Alumni from './Alumni';
import Contact from './Contact';
import Donate from './Donate';


const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/archery" element={<Archery />} />
        <Route path="/activities/canoeing" element={<Canoeing />} />
        <Route path="/activities/fishing" element={<Fishing />} />
        <Route path="/activities/rowing" element={<Rowing />} />
        <Route path="/activities/sailing" element={<Sailing />} />
        <Route path="/activities/swimming" element={<Swimming />} />
        <Route path="/activities/tennis" element={<Tennis />} />
        <Route path="/activities/woodcraft" element={<Woodcraft />} />
        <Route path="/activities/workshop" element={<Workshop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/camp-life" element={<CampLife />} />
        <Route path="/families" element={<Families />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </main>
  );
};

export default Main;
