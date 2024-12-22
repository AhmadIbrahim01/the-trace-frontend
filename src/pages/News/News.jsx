import React from "react";
import "./News.css";
import newsOne from "../../assets/images/news-1.svg";
import newsTwo from "../../assets/images/news-2.svg";
import newsThree from "../../assets/images/news-3.svg";
import newsFour from "../../assets/images/news-4.svg";
import crimeTape from "../../assets/images/crime-tape.svg";

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
const HotNews = () => (
  <div className="hot-news flex center">
    <div className="news-left">
      <img src={newsFour} alt="" />
    </div>
    <div className="news-right flex column center">
      <h3>Ireland hears the call of Palestine, but is it free to answer?</h3>
      <p>
        Today, Ireland is a country reckoning with the cost and consequences of
        abandoning its ideals for economic gain. Since freeing 26 of its 32
        counties from British rule more than 100 years ago, Ireland has moved
        away from its socialist roots and embraced neoliberalism. .....
      </p>
      <h4>3 mins ago</h4>
    </div>
    <img className="crime-tape" src={crimeTape} alt="" />
  </div>
);

const News = () => (
  <>
    <HeroSection />
    <HotNews />
  </>
);

export default News;
