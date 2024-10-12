// src/components/ChatWindow.js
import React, { useState, useEffect } from 'react';
import '../../../styles/login-style.css'; // ChatWindow 스타일 분리
import { getMessages, sendMessage, deleteMessage } from '../../../services/ChatService';

const ChatWindow = ({ chat }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // 메시지 가져오기 (GET 요청)
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getMessages(chat.id);
        setMessages(response.data);
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };
    
    fetchMessages();
  }, [chat.id]);

  // 메시지 보내기 (POST 요청)
  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;
    
    const messageData = {
      name: 'You',
      text: newMessage,
      time: new Date().toLocaleString(),
    };

    try {
      const response = await sendMessage(chat.id, messageData);
      setMessages([...messages, response.data]); // 서버에서 저장된 메시지 데이터를 사용
      setNewMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  // 메시지 삭제 (DELETE 요청)
  const handleDeleteMessage = async (messageId) => {
    try {
      await deleteMessage(chat.id, messageId);
      setMessages(messages.filter(message => message.id !== messageId));
    } catch (error) {
      console.error('Failed to delete message:', error);
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-title">
        <div className="title-info">
          <img src={chat.img} alt={`${chat.name}'s profile`} />
          {chat.name}
        </div>
        <div className="title-setting">
          <a href="#delete-chat" className="click-icon">
            <img className="icon delete-icon" src="/path/to/delete-icon.png" alt="Delete Chat" />
          </a>
          <a href="#edit-chat" className="click-icon">
            <img className="icon edit-icon" src="/path/to/edit-icon.png" alt="Edit Chat" />
          </a>
          <a href="#call" className="click-icon">
            <img className="icon call-icon" src="/path/to/call-icon.png" alt="Call" />
          </a>
        </div>
      </div>
      <div className="chat-messages">
        {messages.map(message => (
          <div key={message.id} className="chat-log">
            <img src={message.name === 'You' ? '/image/your-profile.jpg' : chat.img} alt="Profile Image" />
            <div className="chat-log-txt">
              <div className="log-name">{message.name}</div>
              <div className="log-txt">{message.text}</div>
              <div className="log-time">{message.time}</div>
              <div className="log-menu">
                <a href="#copy-message" className="copy-message">Copy</a>
                <a href="#delete-message" className="delete-message" onClick={() => handleDeleteMessage(message.id)}>Delete</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          className="send-message"
          name="chat-message"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
        />
        <button type="button" className="send-message-btn" onClick={handleSendMessage}>
          Send
          <img alt="Send" className="icon send-icon" src="/path/to/send-icon.png" />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;