import React, { useState, useEffect } from "react";
import "./Case.css";
import tapeOne from "../../assets/images/tape-1.svg";
import tapeTwo from "../../assets/images/tape-2.svg";
import halfPaper from "../../assets/images/half-paper.svg";
import caseImage from "../../assets/images/case-image.svg";
import galleryOne from "../../assets/images/gallery-1.svg";
import galleryTwo from "../../assets/images/gallery-2.svg";
import galleryThree from "../../assets/images/gallery-3.svg";
import galleryFour from "../../assets/images/gallery-4.svg";
import galleryFive from "../../assets/images/gallery-5.svg";
import pin from "../../assets/images/pin.svg";
import sceneTape from "../../assets/images/scene-tape.svg";
import calendarIcon from "../../assets/icons/calendar-icon.svg";
import tickCircleIcon from "../../assets/icons/tick-circle-icon.svg";
import backArrow from "../../assets/icons/back-arrow.svg";
import leftHand from "../../assets/images/left-hand.svg";
import rightHand from "../../assets/images/right-hand.svg";
import filterImage from "../../assets/icons/comments-filter.svg";
import like from "../../assets/icons/like.svg";
import dislike from "../../assets/icons/dislike.svg";
import UserProfileModal from "../../components/UserProfileModal/UserProfileModal";

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

    <div className="description">
      <h1 className="description-h1">Description</h1>
      <h3 className="description-h3">
        Ireland hears the call of Palestine, but is it free to answer?
      </h3>
      <p className="description-p">
        Today, Ireland is a country reckoning with the cost and consequences of
        abandoning its ideals for economic gain. Since freeing 26 of its 32
        counties from British rule more than 100 years ago, Ireland has moved
        away from its socialist roots and embraced neoliberalism. .....
        <br />
        <br />
        Today, Ireland is a country reckoning with the cost and consequences of
        abandoning its ideals for economic gain. Since freeing 26 of its 32
        counties from British rule more than 100 years ago, Ireland has moved
        away from its socialist roots and embraced neoliberalism. .....
        <br />
        <br />
        Today, Ireland is a country reckoning with the cost and consequences of
        abandoning its ideals for economic gain. Since freeing 26 of its 32
        counties from British rule more than 100 years ago, Ireland has moved
        away from its socialist roots and embraced neoliberalism. .....
      </p>
      <div className="case-notice">
        <h6>Important</h6>
        <p>
          Today, Ireland is a country reckoning with the cost and consequences
          of abandoning its ideals for economic gain. Since freeing 26 of its 32
          counties from British rule more than 100 years ago, Ireland has.
        </p>
      </div>
      <h1 className="description-h1">Gallery</h1>
      <div className="gallery flex">
        <div className="gallery-container flex center column">
          <div className="gallery-main">
            <img className="main-picture" src={galleryOne} alt="" />
          </div>
          <div className="gallery-sub flex">
            <img className="sub-picture" src={galleryTwo} alt="" />
            <img className="sub-picture" src={galleryThree} alt="" />
            <img className="sub-picture" src={galleryFour} alt="" />
            <img className="sub-picture" src={galleryFive} alt="" />
          </div>
        </div>
        <p>
          Today, Ireland is a country reckoning with the cost and consequences
          of abandoning its ideals for economic gain. Since freeing 26 of its 32
          counties from British rule more than 100 years ago, Ireland has moved
          away from its socialist roots and embraced neoliberalism. Today,
          Ireland is a country reckoning with the cost and consequences of
          abandoning its ideals for economic gain. Since freeing 26 of its 32
          counties from British rule more than 100 years ago, Ireland has moved
          away from its socialist roots and embraced neoliberalism. ..... Today,
          Ireland is a country reckoning with the cost and consequences of
          abandoning its ideals.
        </p>
      </div>
      <h1 className="description-h1">Scene</h1>
      <div className="scene"></div>
      <h1 className="description-h1">Map</h1>
      <div className="map"></div>
    </div>
  </div>
);

const TipSubmission = () => (
  <div className="tip-section flex center column">
    <h1 className="tip-h1">The Case Tip Submission</h1>
    <p className="tip-p">
      Do you have a clue? Submit a tip to help for investigations
    </p>
    <button className="tip-button">Tip Page</button>
    <img className="left-hand" src={leftHand} alt="" />
    <img className="right-hand" src={rightHand} alt="" />
  </div>
);

const CommentsSection = () => (
  <div className="comments-section">
    <h1 className="description-h1">Comments</h1>
    <div className="comment-input">
      <input
        className="comments-input"
        placeholder="Add comment..."
        type="text"
      />
      <button>Submit</button>
    </div>
    <hr />
  </div>
);

const Comments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const openModal = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const initialComments = [
    {
      author: "Ahmad Ibrahim",
      time: "50 mins ago",
      text: "Figma ipsum component variant main layer. connection share figjam.",
      likes: 30,
      profileImage: galleryOne,
    },
    {
      author: "John Doe",
      time: "1 hour ago",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      likes: 15,
      profileImage: galleryTwo,
    },
    {
      author: "Jane Smith",
      time: "2 hours ago",
      text: "Another comment with a bit more content.",
      likes: 50,
      profileImage: galleryThree,
    },
  ];

  const [comments, setComments] = useState(initialComments);
  const [filter, setFilter] = useState("liked");

  const handleFilterChange = () => {
    if (filter === "recent") {
      setFilter("liked");
    } else {
      setFilter("recent");
    }
  };
  useEffect(() => {
    if (filter === "liked") {
      setComments(initialComments);
    }
  }, [filter]);
  useEffect(() => {
    if (filter === "recent") {
      const sortedComments = [...comments].sort((a, b) => b.likes - a.likes);
      setComments(sortedComments);
    }
  }, [filter]);

  return (
    <div className="comments-section flex column">
      <div className="comments-header flex center">
        <div className="flex center">
          <h3>Comments</h3>
          <span className="flex center">{comments.length}</span>
        </div>
        <button onClick={handleFilterChange}>
          {filter === "recent" ? "Recent" : "Most Liked"}
        </button>
      </div>

      {comments.map((comment, index) => (
        <div
          key={index}
          className="comment flex"
          onClick={() => openModal(comment)}
        >
          <button className="profile">
            <img src={comment.profileImage} alt={comment.author} />
          </button>
          <div className="comment-body flex column">
            <div className="comment-author">
              <p className="flex">
                {comment.author} <span>{comment.time}</span>
              </p>
            </div>
            <div className="comment-text">
              <p>{comment.text}</p>
            </div>
            <div className="comment-action flex">
              <span>{comment.likes} Likes</span>
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

const Case = () => (
  <>
    <HeroSection />
    <CaseDescription />
    <TipSubmission />
    <CommentsSection />
    <Comments />
  </>
);

export default Case;
