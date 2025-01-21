import React from "react";
import Banner from "../Components/Common/Bannersec";
import bannerImage from "../assets/portfolio-bg.png";

const Home = () => {
  return (
    <div>
      <Banner image={bannerImage} title="LINKING YOU TO THE FUTURE" />
      <div className="main-content-wrapper">
        <h1>Welcome to the Home Page</h1>
      </div>
    </div>
  );
};

export default Home;
