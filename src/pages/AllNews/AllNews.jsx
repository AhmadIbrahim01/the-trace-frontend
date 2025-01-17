import React from "react";
import "./AllNews.css";
import news from "../../assets/images/news.png";
import { useLocation } from "react-router-dom";

const HeroSection = () => (
  <div className="all-news-hero flex column">
    <div className="all-news-header flex column center">
      <h6 className="t-center">Stay Informed, Stay Engaged</h6>
      <p className="t-center">
        Get the latest updates on national news, breaking stories, and in-depth
        investigations shaping our country’s future.
      </p>
    </div>
  </div>
);

const NewsContainer = ({ title, data }) => {
  return (
    <div className="news-container flex center column">
      <div className="news-container-header">
        <h1 className="t-center">{title}</h1>
      </div>
      <div className="news-cards flex wrap center">
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
  const location = useLocation();
  const { data } = location.state || {};

  return (
    <>
      <HeroSection />

      <NewsContainer title="Latest News" data={data} />
    </>
  );
};

export default News;
