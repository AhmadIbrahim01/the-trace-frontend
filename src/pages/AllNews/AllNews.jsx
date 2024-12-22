import React from "react";
import "./AllNews.css";
import news from "../../assets/images/news.png";

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

      <NewsContainer title="Latest News" data={data1} />
    </>
  );
};

export default News;
