import React, { useState, useEffect } from "react";
import "./InvestigatorSelectedCase.css";

import tapeOne from "../../../assets/images/tape-1.svg";
import tapeTwo from "../../../assets/images/tape-2.svg";
import halfPaper from "../../../assets/images/half-paper.svg";
import caseImage from "../../../assets/images/case-image.svg";
import galleryOne from "../../../assets/images/gallery-1.svg";
import pin from "../../../assets/images/pin.svg";
import sceneTape from "../../../assets/images/scene-tape.svg";
import calendarIcon from "../../../assets/icons/calendar-icon.svg";
import tickCircleIcon from "../../../assets/icons/tick-circle-icon.svg";
import backArrow from "../../../assets/icons/back-arrow.svg";
import leftHand from "../../../assets/images/left-hand.svg";
import rightHand from "../../../assets/images/right-hand.svg";
import filterImage from "../../../assets/icons/comments-filter.svg";
import like from "../../../assets/icons/like.svg";
import dislike from "../../../assets/icons/dislike.svg";
import UserProfileModal from "../../../components/UserProfileModal/UserProfileModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import profileImage from "../../../assets/images/suspect.svg";
import { jwtDecode } from "jwt-decode";
import MapComponent from "../../../components/MapComponent/MapComponent";

const HeroSection = ({ theCase }) => {
  const [role, setRole] = useState("");
  const img1 = theCase.caseImages[0];
  const img2 = theCase.caseImages[1];

  let caseStatus = "Not available";
  theCase.status === "in_progress"
    ? (caseStatus = "In progress")
    : (caseStatus = theCase.status);

  const navigate = useNavigate();
  const goToManageCase = () => {
    navigate("/investigator-case");
  };
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setRole(decoded.role);
    }
  }, []);

  return (
    <div className="case-hero flex center column">
      <div className="case-bio flex center column">
        <h1>{theCase.title}</h1>
        {role && role === "investigator" ? (
          <button className="tip-button" onClick={goToManageCase}>
            Manage case
          </button>
        ) : (
          <></>
        )}
      </div>

      <div className="image-one">
        <img src={tapeOne} alt="" />
        <img src={img1 || caseImage} alt="" />
      </div>
      <div className="image-two">
        <img src={tapeTwo} alt="" />
        <img src={img2 || galleryOne} alt="" />
      </div>
      <img className="half-paper" src={halfPaper} alt="" />
      <div className="sticky-note flex center">
        <p>Case</p>
        <img src={pin} alt="" />
      </div>
    </div>
  );
};

const CaseDescription = ({ theCase }) => {
  const caseImages = theCase.caseImages;
  const limitedImages = caseImages.slice(0, 4);
  const [mainImage, setMainImage] = useState(limitedImages[0]);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/investigator-cases");
  };

  const date = new Date(theCase.createdAt);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  let caseStatus = "Not available";
  theCase.status === "in_progress"
    ? (caseStatus = "In progress")
    : (caseStatus = theCase.status);

  const latitude = theCase.map.latitude || 33.89031080600027;
  const longitude = theCase.map.longitude || 35.47024942065306;

  return (
    <div className="case-description flex center column">
      <img className="scene-tape" src={sceneTape} alt="scene-tape" />
      <div className="description-header flex">
        <button className="back-btn flex center" onClick={goBack}>
          <img src={backArrow} alt="" />
          <p>Back</p>
        </button>
        <div className="flex center">
          <div className="case-status flex center">
            <p>Case {caseStatus || "Status not available"}</p>
            <img src={tickCircleIcon} alt="Tick Circle Icon" />
          </div>
          <div className="case-date flex">
            <img src={calendarIcon} alt="Calendar Icon" />
            <p>Published on {formattedDate}</p>
          </div>
        </div>
      </div>

      <div className="description">
        <h1 className="description-h1">Description</h1>
        <h3 className="description-h3">{theCase.title}</h3>
        <p className="description-p">{theCase.description}</p>
        <div className="case-notice">
          <h6>Important</h6>
          <p>
            Please remember that any information shared regarding this case
            should be treated with utmost confidentiality to ensure the
            integrity of the investigation
          </p>
        </div>
        <h1 className="description-h1">Gallery</h1>

        <div className="gallery flex">
          <div className="gallery-container flex center column">
            <div className="gallery-main">
              <img
                className="main-picture"
                src={mainImage}
                alt="Main Gallery"
              />
            </div>
            <div className="gallery-sub flex">
              {limitedImages.map((image, index) => (
                <img
                  key={index}
                  className="sub-picture"
                  src={image}
                  alt={`Gallery thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(image)}
                />
              ))}
            </div>
          </div>
          <p>{theCase.description}</p>
        </div>

        {/* <h1 className="description-h1">Scene</h1>
        <div className="scene"></div> */}
        <h1 className="description-h1">Map</h1>
        <div className="map">
          <MapComponent
            latitude={latitude}
            longitude={longitude}
          ></MapComponent>
        </div>
      </div>
    </div>
  );
};

const TipSubmission = () => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    return <></>;
  }

  const navigate = useNavigate();
  const submitTipHandler = () => {
    navigate("/submit-tip");
  };
  return (
    <div className="tip-section flex center column">
      <h1 className="tip-h1">The Case Tip Submission</h1>
      <p className="tip-p">
        Do you have a clue? Submit a tip to help for investigations
      </p>
      <button className="tip-button" onClick={submitTipHandler}>
        Tip Page
      </button>
      <img className="left-hand" src={leftHand} alt="" />
      <img className="right-hand" src={rightHand} alt="" />
    </div>
  );
};

const CommentsSection = () => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    return <></>;
  }

  const caseId = localStorage.getItem("caseId");

  const decoded = jwtDecode(token);
  const uId = decoded.userId;
  const [formData, setFormData] = useState({
    userId: uId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const addComment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://127.0.0.1:${
          import.meta.env.VITE_SERVER_PORT
        }/api/comment/${caseId}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      setFormData({
        userId: uId,
        content: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="comments-section">
      <h1 className="description-h1">Comments</h1>
      <form className="comment-input">
        <input
          className="comments-input"
          placeholder="Add comment..."
          name="content"
          type="text"
          value={formData.content}
          onChange={handleChange}
        />
        <button type="submit" onClick={addComment}>
          Submit
        </button>
      </form>
      <hr />
    </div>
  );
};

const Comments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  const [theComments, setTheComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const caseId = localStorage.getItem("caseId");

  useEffect(() => {
    const getComments = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://127.0.0.1:${
            import.meta.env.VITE_SERVER_PORT
          }/api/comment/${caseId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setTheComments(response.data.comments);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    getComments();
  }, []);

  const openModal = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="comments-section flex column">
      <div className="comments-header flex center">
        <div className="flex center">
          <h3>Comments</h3>
          <span className="flex center">{theComments.length}</span>
        </div>
        {/* <button onClick={handleFilterChange}>
          {filter === "recent" ? "Recent" : "Most Liked"}
        </button> */}
      </div>

      {theComments.length !== 0 &&
        theComments.map((theComment, index) => (
          <div key={index} className="comment flex">
            <button className="profile" onClick={() => openModal(theComment)}>
              <img
                src={theComment.userId.profilePicture || profileImage}
                alt={theComment.userId.firstName}
              />
            </button>
            <div className="comment-body flex column">
              <div className="comment-author">
                <p className="flex">
                  {theComment.userId.firstName}{" "}
                  {/* <span>{theComment.createdAt}</span> */}
                </p>
              </div>
              <div className="comment-text">
                <p>{theComment.content}</p>
              </div>
              <div className="comment-action flex">
                <span>{theComment.likes} Likes</span>
                <button>
                  <img src={like} alt="like" />
                </button>
                <button>
                  <img src={dislike} alt="dislike" />
                </button>
              </div>
            </div>
          </div>
        ))}

      <UserProfileModal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={modalData}
      />
    </div>
  );
};

const InvestigatorSelectedCase = () => {
  const [theCase, setCase] = useState({});
  const [loading, setLoading] = useState(true);
  const caseId = localStorage.getItem("caseId");

  useEffect(() => {
    const getCase = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://127.0.0.1:${
            import.meta.env.VITE_SERVER_PORT
          }/api/case/${caseId}`,
          {
            headers: {
              "Content-Type": "applicatio/json",
            },
          }
        );

        setCase(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    getCase();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <HeroSection theCase={theCase} />
      <CaseDescription theCase={theCase} />
      {/* <TipSubmission theCase={theCase} /> */}
      <CommentsSection theCase={theCase} />
      <Comments theCase={theCase} />
    </>
  );
};

export default InvestigatorSelectedCase;
