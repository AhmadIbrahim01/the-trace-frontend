import React from "react";
import "./News.css";
import newsOne from "../../assets/images/news-1.svg";
import newsTwo from "../../assets/images/news-2.svg";
import newsThree from "../../assets/images/news-3.svg";
import newsFour from "../../assets/images/news-4.svg";
import crimeTape from "../../assets/images/crime-tape.svg";
import backArrow from "../../assets/icons/back-arrow.svg";
import news from "../../assets/images/news.png";

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

const NewsContainer = ({ title, data }) => {
  return (
    <div className="news-container flex center column">
      <div className="news-container-header flex">
        <h1>{title}</h1>
        <button className="flex center">
          <p>See all</p>
          <img src={backArrow} alt="Back arrow" />
        </button>
      </div>
      <div className="news-cards flex">
        {data.map((d, index) => (
          <div key={index} className="news-card flex center column">
            <div className="img-container flex">
              {d.link ? (
                <a href={d.link} className="flex news-link">
                  <img src={d.img} alt={d.description} />
                </a>
              ) : (
                <img src={d.img} alt={d.description} />
              )}
            </div>
            <p>{d.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const News = () => {
  const data1 = [
    {
      img: news,
      description: "Israeli forces begin withdrawal from southern Lebanon",
      link: "https://example.com/article1",
    },
    {
      img: news,
      description: "Israeli forces begin withdrawal from southern Lebanon",
      link: "https://example.com/article1",
    },
    {
      img: news,
      description: "Israeli forces begin withdrawal from southern Lebanon",
      link: "https://example.com/article1",
    },
    {
      img: news,
      description: "Israeli forces begin withdrawal from southern Lebanon",
      link: "https://example.com/article1",
    },
  ];

  const data2 = [
    {
      img: news,
      description: "Israeli forces begin withdrawal from southern Lebanon",
      link: "https://example.com/article1",
    },
    {
      img: news,
      description: "Israeli forces begin withdrawal from southern Lebanon",
      link: "https://example.com/article1",
    },
    {
      img: news,
      description: "Israeli forces begin withdrawal from southern Lebanon",
      link: "https://example.com/article1",
    },
    {
      img: news,
      description: "Israeli forces begin withdrawal from southern Lebanon",
      link: "https://example.com/article1",
    },
  ];

  return (
    <>
      <HeroSection />
      <HotNews />
      <NewsContainer title="Latest News" data={data1} />
      <NewsContainer title="Trending News" data={data2} />
    </>
  );
};

export default News;
