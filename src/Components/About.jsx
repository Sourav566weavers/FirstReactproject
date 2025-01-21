import React from "react";
import Banner from "../Components/Common/Bannersec";
import aboutBannerImage from "../assets/blog-banner.jpg";

const About = () => {
  return (
    <div>
      <Banner image={aboutBannerImage} title="ABOUT US" />
      <div className="main-content-wrapper">
        <h1>Welcome to the About Page</h1>
      </div>
    </div>
  );
};

export default About;
