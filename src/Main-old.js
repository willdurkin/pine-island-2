import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import banner from "./img/pic3.png";
import pic4 from "./img/pic4.jpeg";
import pic5 from "./img/pic5.png";

const Main = () => {
  return (
    <div>
      <div className="main" style={{ backgroundImage: `url(${banner})` }}>
        <h1 className="title">Pine Island Camp</h1>
        <h2 className="subtitle">Established 1902</h2>
      </div>
      <div className="slide">
        <div className="copy">
          <h2>Summers that shape a lifetime</h2>
          <p>
            Distinguished by its program, small enrollment, and unique
            freshwater island location, Pine Island Camp has offered fun,
            traditional camp activities since 1902 in a rustic setting that
            develops a boy's independence, imagination and character.
          </p>
        </div>

        <img src={pic4} />
      </div>
      <div className="slide">
        <img src={pic5} />

        <div className="copy">
          <h2>Simple, unplugged, close to nature</h2>
          <p>
            Distinguished by its program, small enrollment, and unique
            freshwater island location, Pine Island Camp has offered fun,
            traditional camp activities since 1902 in a rustic setting that
            develops a boy's independence, imagination and character.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
