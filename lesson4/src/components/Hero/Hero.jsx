import React from "react";
import pana1 from "../../img/pana1.svg";

const Hero = () => {
  return (
    <div id="Hero">
      <div className="container">
        <div className="hero">
          <div className="hero-text">
            <h1>
              Making the most of the ever-growing <br></br>
              <span>Information Technology</span>
            </h1>
            <p>
              Managed by a team of professional experts with extensive
              experience and impressive track records
            </p>
            <button className="hero-btn">Read More</button>
          </div>
          <img src={pana1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
