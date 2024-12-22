import React from "react";
import "./News.css";
import newsOne from "../../assets/images/news-1.svg";
import newsTwo from "../../assets/images/news-2.svg";
import newsThree from "../../assets/images/news-3.svg";

const HeroSection = () => (
  <div className="news-hero flex center column">
    <div className="news-header flex column center">
      <h6>Our country news</h6>
      <p>
        Crime Investigator news Crime Investigator news Crime Investigator news
        Crime Investigator news
      </p>
    </div>
    <div className="news-pictures flex center">
      <div className="news-left">
        <img src={newsOne} alt="" />
      </div>
      <div className="news-right flex column center">
        <img src={newsTwo} alt="" />
        <img src={newsThree} alt="" />
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
