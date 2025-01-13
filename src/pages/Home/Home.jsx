import React, { useState, useEffect } from "react";
import "./Home.css";
import fingMagn from "../../assets/images/fingerprint-magnifier.png";
import fingerprint from "../../assets/images/fingerprint.png";
import communityIcon from "../../assets/icons/community-icon.svg";
import rewardIcon from "../../assets/icons/reward-icon.svg";
import justiceIcon from "../../assets/icons/justice-icon.svg";
import howToJoinIcon from "../../assets/icons/how-to-join-icon.svg";
import userIcon from "../../assets/icons/user-icon.svg";
import lines from "../../assets/images/lines.svg";
import arrow from "../../assets/icons/arrow.svg";
import magnifier from "../../assets/images/magnifier.svg";
import papers from "../../assets/images/papers.svg";
import drawing from "../../assets/images/drawing.svg";
import house from "../../assets/images/house.svg";
import whiteFingerprint from "../../assets/images/white-fingerprint.svg";
import triangle from "../../assets/images/triangle.svg";
import AboutUsPicture from "../../assets/images/about-us.svg";
import downArrow from "../../assets/icons/down-arrow.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { gsap } from "gsap";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const ActionItem = ({ icon, text }) => (
  <div className="action">
    <img src={icon} alt="" />
    <h3>{text}</h3>
  </div>
);

const TestimonialCard = ({ text, name, image }) => (
  <div className="testimonial-card">
    <p>"{text}"</p>
    <div className="card-info flex column center">
      <img src={image} alt="user" />
      <p>{name}</p>
    </div>
  </div>
);

const HeroSection = ({ userRole, userName }) => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.from(".btn-container button", {
      x: -200,
    });
    gsap.to(".btn-container button", {
      duration: 2,
      ease: "bounce.inout",
      x: 0,
    });
    gsap.from(".hero h1", {
      y: -1000,
    });
    gsap.to(".hero h1", {
      duration: 1,
      ease: "bounce.inout",
      y: 0,
    });
  }, []);

  const navigateToCases = () => {
    navigate("/cases");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToInvestigatorCases = () => {
    navigate("/investigator-cases");
  };
  if (userRole === "public_user") {
    return (
      <div className="hero flex center column">
        <h1 className="t-center">Welcome Back {userName}</h1>
        <div className="btn-container flex center">
          <button className="secondary-btn" onClick={navigateToCases}>
            View public cases
          </button>
        </div>
      </div>
    );
  }
  if (userRole === "investigator") {
    return (
      <div className="hero flex center column">
        <h1 className="t-center">Welcome Back Investigator {userName}</h1>
        <div className="btn-container flex center">
          <button className="primary-btn" onClick={navigateToInvestigatorCases}>
            View your cases
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="hero flex center column">
      <h1 className="t-center">
        Let’s keep our city safe <br /> and crime-free
      </h1>
      <div className="btn-container flex center">
        <button className="primary-btn" onClick={navigateToLogin}>
          Login
        </button>
        <button className="secondary-btn" onClick={navigateToCases}>
          View public cases
        </button>
      </div>
    </div>
  );
};

const GetInvolvedSection = ({ userRole }) => {
  if (userRole) {
    return;
  }
  return (
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
};
const HowToJoinSection = ({ userRole }) => {
  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate("/register");
  };
  if (userRole) {
    return;
  }
  return (
    <div className="how-to-join flex column center">
      <div className="section-header">
        <h1 className="t-center">How to join?</h1>
        <p className="t-center">
          Joining us is very simple, just a few steps and you’ll be set up to
          go!
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
            <h3 className="t-center">
              Share your insights or tips anonymously
            </h3>
          </div>
        </div>
      </div>
      <button className="primary-btn" onClick={navigateToRegister}>
        Sign up now
      </button>
    </div>
  );
};

const TestimonialsSection = () => {
  const [test, setTest] = useState([]);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8080/api/testimonial/",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setTest(response.data.testimonials);

        console.log(response.data.testimonials);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTestimonials();
  }, []);
  return (
    <div className="testimonials flex column center">
      <div className="testimonials-header flex">
        <div className="testimonials-info">
          <h1>Testimonials</h1>
          <p>
            Joining us is very simple, just a few steps and you’ll be set up to
            go!
          </p>
        </div>
        <div className="flex testimonials-btns">
          <button className="arrow-btn">
            <img src={arrow} alt="" />
          </button>
          <button className="arrow-btn">
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
      <div className="testimonial-cards flex center">
        {test.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            text={testimonial.testimonial}
            name={testimonial.firstName}
            image={testimonial.profilePhoto || userIcon}
          />
        ))}
      </div>
      <img className="magnifier" src={magnifier} alt="" />
    </div>
  );
};

const PoweredByAiSection = () => (
  <div className="powered flex column center">
    <h1>
      Powered by{" "}
      <span>
        AI <img src={whiteFingerprint} alt="" />
      </span>
    </h1>
    <p>
      We highly appreciate technology and AI, by creating AI-driven analysis for
      solving crimes
    </p>
    <div className="flex powered-cards">
      <div className="big-card">
        <h2>Statement analysis</h2>
        <img src={papers} alt="papers" />
      </div>
      <div className="small-cards">
        <div className="small-card flex">
          <h2>
            AI drawing <br></br> suspect
          </h2>
          <img src={drawing} alt="drawing" />
        </div>
        <div className="small-card flex">
          <h2>
            3D crime <br /> scene <br /> recreation
          </h2>
          <img src={house} alt="house" />
        </div>
      </div>
    </div>
  </div>
);
const AboutUs = ({ userRole }) => {
  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate("/register");
  };

  if (userRole) {
    return;
  }
  return (
    <div className="about flex center">
      <div className="about-1 flex column">
        <h1>Be part of the solution</h1>
        <p>
          Our innovative platform helps investigators solve cases faster and
          keeps your community safe.
        </p>
        <button className="flex center" onClick={navigateToRegister}>
          Join us now
        </button>
      </div>
      <div className="about-2 flex column">
        <img src={AboutUsPicture} alt="" />
      </div>

      <img src={triangle} alt="" />
    </div>
  );
};

const FAQ = () => {
  const [visibility, setVisibility] = useState({
    faq1: false,
    faq2: false,
    faq3: false,
  });

  const toggleVisibility = (key) => {
    setVisibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="faq flex column center">
      <h1>FAQs</h1>
      <div className="faq-cards flex column">
        <button
          className="faq-card flex column"
          onClick={() => toggleVisibility("faq1")}
        >
          <div className="faq-card flex center">
            <h3>What is The Trace?</h3>
            <img
              style={{
                transform: visibility.faq1 ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
              src={rightArrow}
              alt=""
            />
          </div>
          {visibility.faq1 && (
            <p className="t-left">
              The Trace is an innovative platform that helps investigators solve
              criminal cases using cutting-edge technologies. It provides tools
              like AI-assisted face and fingerprint recognition, 3D crime scene
              recreations, AI analysis of witness statements, and more to make
              investigations faster and more effective.
            </p>
          )}
        </button>

        <button
          className="faq-card flex column"
          onClick={() => toggleVisibility("faq2")}
        >
          <div className="faq-card flex center">
            <h3>How can I help with investigations?</h3>
            <img
              style={{
                transform: visibility.faq2 ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
              src={rightArrow}
              alt=""
            />
          </div>
          {visibility.faq2 && (
            <p className="t-left">
              As a public user, you can assist with public cases by providing
              information, witness details, or even help with identifying
              suspects. You can submit descriptions or sketches, which AI will
              use to generate suspect images. Additionally, you can interact
              with the community and contribute to discussions in the chat.
            </p>
          )}
        </button>

        <button
          className="faq-card flex column"
          onClick={() => toggleVisibility("faq3")}
        >
          <div className="faq-card flex center">
            <h3>Can investigators rely on AI to identify suspects?</h3>
            <img
              style={{
                transform: visibility.faq3 ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
              src={rightArrow}
              alt=""
            />
          </div>
          {visibility.faq3 && (
            <p className="t-left">
              Yes, our advanced AI can analyze witness sketches and
              descriptions, and compare them against a database of potential
              suspects (if provided by government agencies). It also helps
              investigators by detecting inconsistencies in statements or
              identifying stress patterns.
            </p>
          )}
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  const [userRole, setUserRole] = useState("");
  const [userName, setUserName] = useState("");
  const token = localStorage.getItem("authToken");
  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setUserRole(decoded.role);
      setUserName(decoded.name);
    }
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection userRole={userRole} userName={userName} />
      <AboutUs userRole={userRole} userName={userName} />
      <GetInvolvedSection userRole={userRole} userName={userName} />
      <HowToJoinSection userRole={userRole} userName={userName} />
      <TestimonialsSection />
      <PoweredByAiSection />
      <FAQ />
    </>
  );
};

export default Home;
