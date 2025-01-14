import React, { useEffect, useState } from "react";
import "./InvestigatorGPT.css";
import Navbar from "../../../components/Navbar/Navbar";

import threeDots from "../../../assets/icons/three-dots.svg";

import axios from "axios";
import { jwtDecode } from "jwt-decode";
const InvestigatorGPT = () => {
  const token = localStorage.getItem("authToken");
  const decoded = jwtDecode(token);
  const userId = decoded.userId;

  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [chatIndex, setChatIndex] = useState(null);
  const [refresh, setRefresh] = useState(true);

  const [formData, setFormData] = useState({
    role: "user",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [chatId, setChatId] = useState(null);

  const [menuVisible, setMenuVisible] = useState(null);

  // const [aiResponse, setAiResponse] = useState({});

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

        setChats(response.data.chats);
        setMessages(response.data.chats[chatIndex].messages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChats();
  }, [chatIndex, refresh]);

  const createNewChat = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8080/api/gpt/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setRefresh(!refresh);
    } catch (error) {
      console.log(error.message);
    }
  };

  const selectChat = (index, id) => {
    setChatId(id);
    setChatIndex(index);
    setMenuVisible(index);
  };

  const editChatName = () => {
    console.log("EDIT");
  };
  const deleteChat = async (chatId) => {
    try {
      await axios.delete(`http://127.0.0.1:8080/api/gpt/${userId}/${chatId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setRefresh(!refresh);
    } catch (error) {
      console.log(error.message);
    }
  };

  const sendMessage = async (chatId) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8080/api/gpt/message/${userId}/${chatId}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setFormData((prev) => ({
        ...prev,
        content: "",
      }));

      console.log("the res", response);

      // setAiResponse({
      //   role: response.aiResponse.role,
      //   content: response.aiResponse.content,
      // });

      setRefresh(!refresh);
    } catch (error) {
      console.log(error.message);
    }
  };
  // console.log("ai response ", aiResponse);

  return (
    <>
      <Navbar />

      <div className="app-container">
        <aside className="gpt-sidebar">
          <h1 className="sidebar-title">InvestigatorGPT</h1>
          <button onClick={createNewChat} className="new-chat-btn">
            New Chat
          </button>
          <div className="chat-links">
            {chats.map((chat, index) => (
              <div
                key={index}
                onClick={() => selectChat(index, chat._id)}
                className={`chat-link flex  ${
                  chatIndex === index ? "clicked-chat" : ""
                }`}
              >
                <div className="chat-title flex center">
                  <span>✉️</span>
                  {chat.title.length > 14
                    ? chat.title.slice(0, 14) + "..."
                    : chat.title}
                </div>

                {menuVisible === index && (
                  <div className="menu-options flex column center">
                    <button className="menu-option" onClick={editChatName}>
                      Edit
                    </button>
                    <button
                      className="menu-option"
                      onClick={() => deleteChat(chat._id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
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

          {chatIndex !== null ? (
            <div className="chat-input">
              <input
                type="text"
                placeholder="Message..."
                name="content"
                value={formData.content}
                onChange={handleChange}
              />
              <button
                className="send-btn flex center"
                onClick={() => sendMessage(chatId)}
              >
                ➔
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default InvestigatorGPT;
