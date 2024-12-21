import React from "react";
import "./Case.css";
import tapeOne from "../../assets/images/tape-1.svg";
import tapeTwo from "../../assets/images/tape-2.svg";
import halfPaper from "../../assets/images/half-paper.svg";
import caseImage from "../../assets/images/case-image.svg";
import galleryOne from "../../assets/images/gallery-1.svg";
import pin from "../../assets/images/pin.svg";
import sceneTape from "../../assets/images/scene-tape.svg";
import calendarIcon from "../../assets/icons/calendar-icon.svg";
import tickCircleIcon from "../../assets/icons/tick-circle-icon.svg";
import backArrow from "../../assets/icons/back-arrow.svg";

const HeroSection = () => (
  <div className="case-hero flex center column">
    <div className="case-bio">
      <h1>The Victim Of AI</h1>
      <h2>Case #1</h2>
    </div>

    <div className="image-one">
      <img src={tapeOne} alt="" />
      <img src={caseImage} alt="" />
    </div>
    <div className="image-two">
      <img src={tapeTwo} alt="" />
      <img src={galleryOne} alt="" />
    </div>
    <img className="half-paper" src={halfPaper} alt="" />
    <div className="sticky-note flex center">
      <p>Case</p>
      <img src={pin} alt="" />
    </div>
  </div>
);

const CaseDescription = () => (
  <div className="case-description flex center column">
    <img className="scene-tape" src={sceneTape} alt="scene-tape" />
    <div className="description-header flex">
      <button className="back-btn flex center">
        <img src={backArrow} alt="" />
        <p>Back</p>
      </button>
      <div className="flex center">
        <div className="case-status flex center">
          <p>Case closed</p>
          <img src={tickCircleIcon} alt="Tick Circle Icon" />
        </div>
        <div className="case-date flex">
          <img src={calendarIcon} alt="Calendar Icon" />
          <p>Published on January 5, 2023</p>
        </div>
      </div>
    </div>
  </div>
);

const Case = () => (
  <>
    <HeroSection />
    <CaseDescription />
  </>
);

export default Case;
