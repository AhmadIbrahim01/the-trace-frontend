import React from "react";
import "./Home.css";
import fingMagn from "../assets/images/fingerprint-magnifier.png";
import fingerprint from "../assets/images/fingerprint.png";

const Home = () => {
  return (
    <>
      <div className="hero flex center column">
        <h1 className="t-center">
          Let’s keep our city safe <br></br>and crime-free
        </h1>
        <div className="btn-container flex center">
          <button className="primary-btn">Login</button>
          <button className="secondary-btn">View public cases</button>
        </div>
      </div>

      <div className="get-involved flex">
        <div className="container flex">
          <div className="container-one flex column">
            <div className="section-header">
              <h1>
                Why get <br></br> involved?
              </h1>
              <p>Your contribution can make a real difference.</p>
            </div>
            <div className="action-list flex wrap">
              <div className="action">
                <img src="/icons/community-icon.svg" alt="community-icon" />
                <h3>Join a justice enthusiast community</h3>
              </div>
              <div className="action">
                <img src="/icons/reward-icon.svg" alt="reward-icon" />
                <h3>Submit tips and evidence and join our reward system! </h3>
              </div>
              <div className="action">
                <img src="/icons/justice-icon.svg" alt="justice-icon" />
                <h3>Help to bring justice to your community!</h3>
              </div>
            </div>
          </div>
          <div className="container-two">
            <img src={fingerprint} alt="" />
            <img src={fingerprint} alt="" />
            <img src={fingerprint} alt="" />
          </div>
        </div>
        <img className="fingMagn" src={fingMagn} alt="" />
      </div>
    </>
  );
};

export default Home;
