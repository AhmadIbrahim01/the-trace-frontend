import React from "react";
import "./AllNews.css";

const HeroSection = () => (
  <div className="all-news-hero flex column">
    <div className="all-news-header flex column center">
      <h6>Our country news</h6>
      <p>
        Crime Investigator news Crime Investigator news Crime Investigator news
        Crime Investigator news
      </p>
    </div>
  </div>
);

const News = () => {
  return (
    <>
      <HeroSection />
    </>
  );
};

export default News;
