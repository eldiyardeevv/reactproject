import React from "react";
import dsi from "../../img/DSI.jpg";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { IoMdShuffle } from "react-icons/io";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header-logo">
            <img src={dsi} alt="" />
            <div className="header-logo-title">
              <h6>DWIDASA</h6>
              <h6>SAMSARA</h6>
              <h6>INDONESIA</h6>
            </div>
          </div>
          <div className="header-nav">
            <nav className="header-link">
              <li onClick={() => window.scroll(1, 900)}>Services</li>
              <li onClick={() => window.scroll(1, 500)}>Product</li>
              <li onClick={() => window.scroll(1, 50)}>Technology</li>
            </nav>
          </div>
          <nav className="header-select">
            <select>
              <option>About1</option>
              <option>About2</option>
            </select>
            <select>
              <option>Cliend1</option>
              <option>Cliend2</option>
            </select>
            <li>Partner</li>
          </nav>
          <nav className="header-icon">
            <AiOutlineHome />
            <AiOutlineMail />
            <IoMdShuffle />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
