import React from "react";
import img1 from "../../img/img1.svg";
import img2 from "../../img/img2.svg";
import img3 from "../../img/img3.svg";

const Product = () => {
  return (
    <div id="product">
      <div className="container">
        <div className="product">
          <h1>Product and Service</h1>
          <div className="product-block">
            <div className="product-block1">
              <img src={img1} alt="" />
              <h3>Our Product</h3>
              <p>
                Our product is made on the base of our team’s careful research
                and analyses, ranging from internet based application.
              </p>
              <button className="product-btn">Read More</button>
            </div>
            <div className="product-block1">
              <img src={img2} alt="" />
              <h3>Our Service</h3>
              <p>
                Our product is made on the base of our team’s careful research
                and analyses, ranging from internet based application.
              </p>
              <button className="product-btn">Read More</button>
            </div>
            <div className="product-block1">
              <img src={img3} alt="" />
              <h3>Our Technology</h3>
              <p>
                Our product is made on the base of our team’s careful research
                and analyses, ranging from internet based application.
              </p>
              <button className="product-btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
