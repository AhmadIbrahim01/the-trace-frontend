import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="hero flex center column">
      <h1 className="t-center">
        Let’s keep our city safe <br></br>and crime-free
      </h1>
      <div className="btn-container flex center">
        <button className="primary-btn">Login</button>
        <button className="secondary-btn">View public cases</button>
      </div>
    </div>
  );
};

export default Home;
