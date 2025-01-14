import React, { useEffect, useState } from "react";
import "./InvestigatorGPT.css";
import Navbar from "../../../components/Navbar/Navbar";

import axios from "axios";
import { jwtDecode } from "jwt-decode";
const InvestigatorGPT = () => {
  const token = localStorage.getItem("authToken");
  const decoded = jwtDecode(token);
  const userId = decoded.userId;

  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [chatIndex, setChatIndex] = useState(0);

  const [status, setStatus] = useState({
    success: false,
    message: "",
  });

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8080/api/gpt/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("response data gpt", response.data);

        setChats(response.data.chats);
        setMessages(response.data.chats[chatIndex].messages);
        setStatus({
          message: response.data.message,
          success: true,
        });
      } catch (error) {
        console.log(error.message);

        setStatus({
          message: response.data.message,
          success: false,
        });
      }
    };
    fetchChats();
  }, []);

  return (
    <>
      <Navbar />

      <div className="app-container">
        <aside className="gpt-sidebar">
          <h1 className="sidebar-title">InvestigatorGPT</h1>
          <button className="new-chat-btn">New Chat</button>
          <div className="chat-links">
            {chats.map((chat, index) => (
              <div key={index} className="chat-link clicked-chat">
                <span>✉️</span>{" "}
                {chat.title.length > 20
                  ? chat.title.slice(0, 20) + "..."
                  : chat.title}
              </div>
            ))}
          </div>
        </aside>

        <div className="chat-section">
          <div className="chat-messages flex column">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${
                  message.role === "user" ? "user-message" : "ai-message"
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input type="text" placeholder="Message..." />
            <button className="send-btn flex center">➔</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestigatorGPT;
