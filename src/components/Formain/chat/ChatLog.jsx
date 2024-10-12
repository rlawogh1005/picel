import React, { useState, useEffect } from 'react';
import '../../../styles/login-style.css'; // ChatLog 스타일
import { deleteMessage } from '../../services/chatService';

const ChatLog = ({ message, onDelete }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // 왼쪽 메뉴 바 열기
  const handleContextMenu = (e) => {
    e.preventDefault();
    setIsMenuVisible(true);
  };

  // 왼쪽 메뉴 바 닫기
  const handleClickOutside = () => {
    setIsMenuVisible(false);
  };

  // 메세지 복사하는 버튼
  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setIsMenuVisible(false);
    alert('Message copied!');
  };

  // 메세지 삭제하는 버튼
  const handleDelete = async () => {
    try {
      await deleteMessage(message.id);
      onDelete(message);
      alert('Message deleted successfully!');
    } catch (error) {
      console.error('Failed to delete the message:', error);
      alert('Failed to delete the message. Please try again later.');
    }
    setIsMenuVisible(false);
  };

  // 이벤트 리스너
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="chat-log" onContextMenu={handleContextMenu}>
      <img src={message.name === 'You' ? '/image/your-profile.jpg' : message.img} alt="Profile Image" />
      <div className="chat-log-txt">
        <div className="log-name">{message.name}</div>
        <div className="log-txt">{message.text}</div>
        <div className="log-time">{message.time}</div>
        {isMenuVisible && (
          <div className="log-menu">
            <a href="#copy-message" className="copy-message" onClick={handleCopy}>Copy</a>
            <a href="#delete-message" className="delete-message" onClick={handleDelete}>Delete</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatLog;