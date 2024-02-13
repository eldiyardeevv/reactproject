import React from "react";
import pana2 from "../../img/pana2.png";

const About = () => {
  return (
    <div id="About">
      <div className="container">
        <div className="About">
          <img src={pana2} alt="" />
          <div className="about-text">
            <h1>
              Welcome to <span>Dwidasa Samsara Indonesia (DSI)</span>
            </h1>
            <p>
              Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by
              the founders, who each of them has a common end objective to
              innovate new creations by making the most of the ever-growing
              information technology through DSI's distinct front-end based
              application concept.
            </p>
            <p1>
              Managed by a team of professional experts with extensive
              experience and impressive track records, DSI believes that
              continuous improvements and innovations assure your business to
              run effectively and efficiently.
            </p1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
