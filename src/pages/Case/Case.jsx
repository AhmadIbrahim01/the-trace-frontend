import React from "react";
import "./Case.css";
import tapeOne from "../../assets/images/tape-1.svg";
import tapeTwo from "../../assets/images/tape-2.svg";
import halfPaper from "../../assets/images/half-paper.svg";
import caseImage from "../../assets/images/case-image.svg";
import galleryOne from "../../assets/images/gallery-1.svg";
import pin from "../../assets/images/pin.svg";

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
      <p>Helllo</p>
      <img src={pin} alt="" />
    </div>
  </div>
);
const Case = () => (
  <>
    <HeroSection />
  </>
);

export default Case;
