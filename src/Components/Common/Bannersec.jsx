import React from "react";
import "./CSS/Banner.css";

const Banner = ({ image, title }) => {
  return (
    <div>
      <section className="banner-top-row">
        <div className="container">
          <div className="banner-top-title">
            <h1>The test Side</h1>
          </div>
        </div>
      </section>

      <section className="banner-sec">
        <img src={image} alt={`${title} Banner`} className="banner-image" />
      </section>
    </div>
  );
};

export default Banner;
