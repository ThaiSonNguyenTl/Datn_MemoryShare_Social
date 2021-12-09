import React from "react";
import "./messenger.css";
import Conversation from "../../components/Conversations/Conversation";
import Message from "../../components/Message/Message";
// import Topbar from "../../components/topbar/Topbar";
// import Conversation from "../../components/conversations/Conversation";
// import Message from "../../components/message/Message";
// import ChatOnline from "../../components/chatOnline/ChatOnline";
// import { useContext, useEffect, useRef, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import axios from "axios";
// import { io } from "socket.io-client";

const Messenger = () => {
  // const [conversations, setConversations] = useState([]);
  // const [currentChat, setCurrentChat] = useState(null);
  // const [messages, setMessages] = useState([]);
  // const [newMessage, setNewMessage] = useState("");
  // const [arrivalMessage, setArrivalMessage] = useState(null);
  // const [onlineUsers, setOnlineUsers] = useState([]);
  // const socket = useRef();
  // const { user } = useContext(AuthContext);
  // const scrollRef = useRef();

  // useEffect(() => {
  //   socket.current = io("ws://localhost:8900");
  //   socket.current.on("getMessage", (data) => {
  //     setArrivalMessage({
  //       sender: data.senderId,
  //       text: data.text,
  //       createdAt: Date.now(),
  //     });
  //   });
  // }, []);

  // useEffect(() => {
  //   arrivalMessage &&
  //     currentChat?.members.includes(arrivalMessage.sender) &&
  //     setMessages((prev) => [...prev, arrivalMessage]);
  // }, [arrivalMessage, currentChat]);

  // useEffect(() => {
  //   socket.current.emit("addUser", user._id);
  //   socket.current.on("getUsers", (users) => {
  //     setOnlineUsers(
  //       user.followings.filter((f) => users.some((u) => u.userId === f))
  //     );
  //   });
  // }, [user]);

  // useEffect(() => {
  //   const getConversations = async () => {
  //     try {
  //       const res = await axios.get("/conversations/" + user._id);
  //       setConversations(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getConversations();
  // }, [user._id]);

  // useEffect(() => {
  //   const getMessages = async () => {
  //     try {
  //       const res = await axios.get("/messages/" + currentChat?._id);
  //       setMessages(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getMessages();
  // }, [currentChat]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const message = {
  //     sender: user._id,
  //     text: newMessage,
  //     conversationId: currentChat._id,
  //   };

  //   const receiverId = currentChat.members.find(
  //     (member) => member !== user._id
  //   );

  //   socket.current.emit("sendMessage", {
  //     senderId: user._id,
  //     receiverId,
  //     text: newMessage,
  //   });

  //   try {
  //     const res = await axios.post("/messages", message);
  //     setMessages([...messages, res.data]);
  //     setNewMessage("");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  return (
    <section className="messenger-page">
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            {/* {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))} */}
            <div className="chatBoxTop">
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
            
            </div>
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {/* {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )} */}
            <div className="chatBoxTop">
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true}/>
              <Message />
              <Message own={true}/>
              <Message />
              <Message own={true}/>
              <Message />
              <Message own={true}/>
              <Message />
              <Message own={true}/>
            
            </div>
            <div className="chatBoxBottom">
              <input
                className="chatMessageInput"
                placeholder="Message..."
                // onChange={(e) => setNewMessage(e.target.value)}
                // value={newMessage}
              >
              </input>
              <button className="chatSubmitButton">Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messenger;
