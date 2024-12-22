import React from "react";
import "./News.css";

const HeroSection = () => (
  <div className="news-hero flex center column">
    <div className="news-header flex column center">
      <h6>Our country news</h6>
      <p>
        Crime Investigator news Crime Investigator news Crime Investigator news
        Crime Investigator news
      </p>
    </div>
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  </div>
);

const News = () => (
  <>
    <HeroSection />
  </>
);

export default News;
