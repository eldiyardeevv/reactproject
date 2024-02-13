import React from "react";
import dsi from "../../img/DSI.jpg";

const Contact = () => {
  return (
    <div id="Contact">
      <div className="container">
        <div className="contact">
          <div className="content-block1">
            <div className="contect-block1-box">
              <div className="contact-block">
                <img src={dsi} alt="" />
                <div className="contact-title">
                  <h6>DWIDASA</h6>
                  <h6>SAMSARA</h6>
                  <h6>INDONESIA</h6>
                </div>
              </div>
              <div>
                <h3>PT Dwidasa Samsara Indonesia</h3>
                <h5>
                  Ruko Jalur Sutera 29A No. 53 Alam Sutera Serpong, Tangerang
                  15323
                </h5>
              </div>
            </div>
            <div className="contact-con">
              <h2>Contact</h2>
              <p>Phone : +62.21.5314.1135</p>
              <p>Fax : +62.21.5314.1135</p>
              <p>Email : community@dwidasa.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
