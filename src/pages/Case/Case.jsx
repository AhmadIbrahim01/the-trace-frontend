import React from "react";
import "./Case.css";

const HeroSection = () => (
  <div className="case-hero flex center column">
    <div className="case-bio">
      <h1>The Victim Of AI</h1>
      <h2>Case #1</h2>
    </div>
  </div>
);
const Case = () => (
  <>
    <HeroSection />
  </>
);

export default Case;
