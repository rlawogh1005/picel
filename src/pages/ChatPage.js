// src/pages/ChatPage.js
import React, { useState } from 'react';
import ChatWindow from '../components/Formain/chat/ChatWindow';
import ChatLog from '../components/Formain/chat/ChatLog';
import '../styles/login-style.css'; // ChatPage 스타일 분리

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatList, setChatList] = useState([
    { id: 1, name: 'James', lastMessage: 'This is example.', img: '/image/sample.jpg' },
    { id: 2, name: 'Jane', lastMessage: 'Another example.', img: '/image/sample.jpg' },
    // 추가 채팅 데이터
  ]);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <section id="chat" className="content-section active">
      <div className="list">
        <div className="list-title">
          <p>Chat</p>
          <a href="#addchat" className="click-icon">
            <img alt="Add Chat" className="icon addchat-icon" src="/path/to/addchat-icon.png" />
          </a>
        </div>
        <div className="search-container">
          <img alt="Search" className="icon search-icon" src="/path/to/search-icon.png" />
          <input className="search" type="text" placeholder="Search chats..." />
        </div>
        <ul>
          {chatList.map(chat => (
            <li key={chat.id} className="chat-menu" onClick={() => handleChatSelect(chat)}>
              <img src={chat.img} className="chat-img" alt={`${chat.name}'s profile`} />
              <div className="list-menu">
                <div className="list-main">{chat.name}</div>
                <div className="list-sub">{chat.lastMessage}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button className="toggle-list">◀</button>
      {selectedChat && <ChatWindow chat={selectedChat} />}
    </section>
  );
};

export default ChatPage;
