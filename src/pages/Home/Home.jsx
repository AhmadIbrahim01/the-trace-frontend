import React, { useState, useEffect, useRef } from "react";
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
import darkTriangle from "../../assets/images/dark-triangle.svg";
import AboutUsPicture from "../../assets/images/about-us.svg";
import shareIcon from "../../assets/icons/share-icon.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { gsap } from "gsap";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import ScrollTrigger from "gsap/ScrollTrigger";

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

gsap.registerPlugin(ScrollTrigger);

const GetInvolvedSection = ({ userRole }) => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const actionListRef = useRef(null);
  const fingerprintRefs = useRef([]);
  const magnifyingGlassRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power3.out" },
    });

    gsap.set([headerRef.current, actionListRef.current], {
      opacity: 0,
      y: 50,
    });
    gsap.set(fingerprintRefs.current, {
      opacity: 0,
      scale: 0.8,
    });
    gsap.set(magnifyingGlassRef.current, {
      opacity: 0,
      x: -50,
    });

    tl.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
    })
      .to(
        actionListRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=0.5"
      )
      .to(
        fingerprintRefs.current,
        {
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          duration: 0.8,
        },
        "-=0.5"
      )
      .to(
        magnifyingGlassRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 1,
        },
        "-=0.5"
      );

    const actionItems = actionListRef.current.children;
    Array.from(actionItems).forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          scale: 1.05,
          duration: 0.3,
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          scale: 1,
          duration: 0.3,
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  if (userRole) {
    return null;
  }

  return (
    <div className="get-involved flex" ref={sectionRef}>
      <div className="container flex">
        <div className="container-one flex column">
          <div className="section-header" ref={headerRef}>
            <h1>
              Why get <br /> involved?
            </h1>
            <p>Your contribution can make a real difference.</p>
          </div>
          <div className="action-list flex wrap" ref={actionListRef}>
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
          {[0, 1, 2].map((_, index) => (
            <img
              key={index}
              src={fingerprint}
              alt=""
              ref={(el) => (fingerprintRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
      <img
        className="fingMagn"
        src={fingMagn}
        alt=""
        ref={magnifyingGlassRef}
      />
    </div>
  );
};

const HowToJoinSection = ({ userRole }) => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const iconRef = useRef(null);
  const linesRef = useRef(null);
  const cardsRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRefs = useRef([]);

  const navigateToRegister = () => {
    navigate("/register");
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power3.out" },
    });

    gsap.set(headerRef.current, {
      opacity: 0,
      y: 30,
    });
    gsap.set(iconRef.current, {
      opacity: 0,
      scale: 0.8,
    });
    gsap.set(linesRef.current, {
      opacity: 0,
      scaleX: 0,
    });
    gsap.set(cardRefs.current, {
      opacity: 0,
      y: 50,
    });
    gsap.set(buttonRef.current, {
      opacity: 0,
      y: 20,
    });

    tl.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
    })
      .to(iconRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        rotate: 360,
      })
      .to(linesRef.current, {
        opacity: 1,
        scaleX: 1,
        duration: 0.8,
      })
      .to(
        cardRefs.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
        },
        "-=0.4"
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.4"
      );

    cardRefs.current.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          duration: 0.3,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "none",
          duration: 0.3,
        });
      });
    });

    buttonRef.current.addEventListener("mouseenter", () => {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 0.3,
      });
    });

    buttonRef.current.addEventListener("mouseleave", () => {
      gsap.to(buttonRef.current, {
        scale: 1,
        duration: 0.3,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  if (userRole) {
    return null;
  }

  return (
    <div className="how-to-join flex column center" ref={sectionRef}>
      <div className="section-header" ref={headerRef}>
        <h1 className="t-center">How to join?</h1>
        <p className="t-center">
          Joining us is very simple, just a few steps and you'll be set up to
          go!
        </p>
      </div>
      <div className="flex column center">
        <img className="icon" src={howToJoinIcon} alt="" ref={iconRef} />
        <img className="lines" src={lines} alt="" ref={linesRef} />
        <div className="cards flex">
          {[
            "Sign Up and Join the Community",
            "Learn about ongoing efforts to solve crimes",
            "Share your insights or tips anonymously",
          ].map((text, index) => (
            <div
              key={index}
              className="card flex column center"
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <h3 className="t-center">{text}</h3>
            </div>
          ))}
        </div>
      </div>
      <button
        className="primary-btn"
        onClick={navigateToRegister}
        ref={buttonRef}
      >
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
          `http://127.0.0.1:${
            import.meta.env.VITE_SERVER_PORT
          }/api/testimonial/`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setTest(response.data.testimonials);
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
            key={testimonial._id}
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

const PoweredByAiSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const fingerprintRef = useRef(null);
  const descriptionRef = useRef(null);
  const bigCardRef = useRef(null);
  const smallCardRefs = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power3.out" },
    });

    gsap.set(titleRef.current, {
      opacity: 0,
      y: 30,
    });
    gsap.set(fingerprintRef.current, {
      opacity: 0,
      scale: 0.5,
      rotation: -180,
    });
    gsap.set(descriptionRef.current, {
      opacity: 0,
      y: 20,
    });
    gsap.set(bigCardRef.current, {
      opacity: 0,
      scale: 0.95,
      y: 30,
    });
    gsap.set(smallCardRefs.current, {
      opacity: 0,
      x: 30,
    });

    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
    })
      .to(
        fingerprintRef.current,
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.5"
      )
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.7"
      )
      .to(
        bigCardRef.current,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
        },
        "-=0.4"
      )
      .to(
        smallCardRefs.current,
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.8,
        },
        "-=0.6"
      );

    const addHoverAnimation = (element) => {
      element.addEventListener("mouseenter", () => {
        gsap.to(element, {
          scale: 1.02,
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          duration: 0.3,
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element, {
          scale: 1,
          boxShadow: "none",
          duration: 0.3,
        });
      });
    };

    addHoverAnimation(bigCardRef.current);
    smallCardRefs.current.forEach((card) => addHoverAnimation(card));

    gsap.to(fingerprintRef.current, {
      y: -5,
      rotation: 5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="powered flex column center" ref={sectionRef}>
      <h1 ref={titleRef}>
        Powered by{" "}
        <span>
          AI <img src={whiteFingerprint} alt="" ref={fingerprintRef} />
        </span>
      </h1>
      <p ref={descriptionRef}>
        We highly appreciate technology and AI, by creating AI-driven analysis
        for solving crimes
      </p>
      <div className="flex powered-cards">
        <div className="big-card" ref={bigCardRef}>
          <h2>Statement analysis</h2>
          <img src={papers} alt="papers" />
        </div>
        <div className="small-cards">
          <div
            className="small-card flex"
            ref={(el) => (smallCardRefs.current[0] = el)}
          >
            <h2>
              AI drawing <br />
              suspect
            </h2>
            <img src={drawing} alt="drawing" />
          </div>
          <div
            className="small-card flex"
            ref={(el) => (smallCardRefs.current[1] = el)}
          >
            <h2>
              Investigator <br /> GPT <br />
            </h2>

            <div className="data-driven">
              <p>Data-driven</p>
            </div>
            <div className="instant-response">
              <p>Instant response</p>
            </div>
            <div className="ai-powered">
              <p>AI-powered</p>
            </div>
            <div className="share-icon flex center column">
              <img src={shareIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = ({ userRole, theme }) => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const triangleRef = useRef(null);

  const navigateToRegister = () => {
    navigate("/register");
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power3.out" },
    });

    gsap.set(textRef.current, {
      opacity: 0,
      x: -50,
    });
    gsap.set(buttonRef.current, {
      opacity: 0,
      y: 20,
    });
    gsap.set(imageRef.current, {
      opacity: 0,
      x: 50,
    });

    tl.to(textRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
    })
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.5"
      )
      .to(
        imageRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 1,
        },
        "-=0.8"
      );

    buttonRef.current.addEventListener("mouseenter", () => {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 0.3,
      });
    });

    buttonRef.current.addEventListener("mouseleave", () => {
      gsap.to(buttonRef.current, {
        scale: 1,
        duration: 0.3,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  if (userRole) {
    return null;
  }

  return (
    <div className="about flex center" ref={sectionRef}>
      <div className="about-1 flex column" ref={textRef}>
        <h1>Be part of the solution</h1>
        <p>
          Our innovative platform helps investigators solve cases faster and
          keeps your community safe.
        </p>
        <button
          className="flex center"
          onClick={navigateToRegister}
          ref={buttonRef}
        >
          Join us now
        </button>
      </div>
      <div className="about-2 flex column" ref={imageRef}>
        <img src={AboutUsPicture} alt="" />
      </div>

      <img
        src={theme === "dark" ? triangle : darkTriangle}
        alt=""
        ref={triangleRef}
      />
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

  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  return (
    <>
      <Navbar />
      <HeroSection userRole={userRole} userName={userName} theme={theme} />
      <AboutUs userRole={userRole} userName={userName} theme={theme} />
      <GetInvolvedSection
        userRole={userRole}
        userName={userName}
        theme={theme}
      />
      <HowToJoinSection userRole={userRole} userName={userName} theme={theme} />
      <TestimonialsSection />
      <PoweredByAiSection />
      <FAQ />
    </>
  );
};

export default Home;
