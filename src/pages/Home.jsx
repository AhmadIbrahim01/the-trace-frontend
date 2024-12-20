import React from "react";
import "./Home.css";
import fingMagn from "../assets/images/fingerprint-magnifier.png";
import fingerprint from "../assets/images/fingerprint.png";
import communityIcon from "../assets/icons/community-icon.svg";
import rewardIcon from "../assets/icons/reward-icon.svg";
import justiceIcon from "../assets/icons/justice-icon.svg";
import howToJoinIcon from "../assets/icons/how-to-join-icon.svg";
import lines from "../assets/images/lines.svg";

// Action Component for Reusability
const ActionItem = ({ icon, text }) => (
  <div className="action">
    <img src={icon} alt="" />
    <h3>{text}</h3>
  </div>
);

// Hero Section Component
const HeroSection = () => (
  <div className="hero flex center column">
    <h1 className="t-center">
      Let’s keep our city safe <br /> and crime-free
    </h1>
    <div className="btn-container flex center">
      <button className="primary-btn">Login</button>
      <button className="secondary-btn">View public cases</button>
    </div>
  </div>
);

// Get Involved Section Component
const GetInvolvedSection = () => (
  <div className="get-involved flex">
    <div className="container flex">
      <div className="container-one flex column">
        <div className="section-header">
          <h1>
            Why get <br /> involved?
          </h1>
          <p>Your contribution can make a real difference.</p>
        </div>
        <div className="action-list flex wrap">
          <ActionItem
            icon={communityIcon}
            text="Join a justice enthusiast community"
          />
          <ActionItem
            icon={rewardIcon}
            text="Submit tips and evidence and join our reward system!"
          />
          <ActionItem
            icon={justiceIcon}
            text="Help to bring justice to your community!"
          />
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
);

const HowToJoinSection = () => (
  <div className="how-to-join flex column center">
    <div className="section-header">
      <h1 className="t-center">How to join?</h1>
      <p className="t-center">
        Joining us is very simple, just a few steps and you’ll be set up to go!
      </p>
    </div>
    <div className="flex column center">
      <img className="icon" src={howToJoinIcon} alt="" />
      <img className="lines" src={lines} alt="" />
      <div className="cards flex">
        <div className="card flex column center">
          <h3 className="t-center">Sign Up and Join the Community</h3>
        </div>
        <div className="card flex column center">
          <h3 className="t-center">
            Learn about ongoing efforts to solve crimes
          </h3>
        </div>
        <div className="card flex column center">
          <h3 className="t-center">Share your insights or tips anonymously</h3>
        </div>
      </div>
    </div>
    <button className="primary-btn">Sign up now</button>
  </div>
);

const Home = () => (
  <>
    <HeroSection />
    <GetInvolvedSection />
    <HowToJoinSection />
  </>
);

export default Home;
