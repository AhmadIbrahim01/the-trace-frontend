import React from "react";
import "./InvestigatorGPT.css";

const InvestigatorGPT = () => {
  return (
    <div className="app-container">
      <aside className="gpt-sidebar">
        <h1 className="sidebar-title">InvestigatorGPT</h1>
        <button className="new-chat-btn">New Chat</button>
        <div className="chat-links">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="chat-link clicked-chat">
              <span>✉️</span> What is the... ?
            </div>
          ))}
        </div>
      </aside>

      <div className="chat-section">
        <div className="chat-messages">
          <div className="message user-message">Hello!</div>
          <div className="message ai-message">Hi! How can I help you?</div>
          <div className="message user-message">Hello!</div>
          <div className="message ai-message">Hi! How can I help you?</div>
          <div className="message user-message">Hello!</div>
          <div className="message ai-message">Hi! How can I help you?</div>
          <div className="message user-message">Hello!</div>
          <div className="message ai-message">Hi! How can I help you?</div>
          <div className="message user-message">Hello!</div>
          <div className="message ai-message">Hi! How can I help you?</div>
          <div className="message user-message">Hello!</div>
          <div className="message ai-message">Hi! How can I help you?</div>
          <div className="message user-message">Hello!</div>
          <div className="message ai-message">Hi! How can I help you?</div>
          <div className="message user-message">Hello!</div>
          <div className="message ai-message">Hi! How can I help you?</div>
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Message..." />
          <button className="send-btn">➔</button>
        </div>
      </div>
    </div>
  );
};

export default InvestigatorGPT;
