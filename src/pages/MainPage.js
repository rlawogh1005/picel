// src/pages/MainPage.js
import React from 'react';
import Navigation from '../components/Formain/Navigation';
import FriendPage from './FriendPage';
import ChatPage from './ChatPage';
import SettingsPage from './SettingPage';
import '../styles/login-style.css'; // MainPage 스타일 분리

const MainPage = () => {
  return (
    <div className="container">
      <Navigation />
      <div className="content">
        <FriendPage />
        <ChatPage />
        <SettingsPage />
      </div>
    </div>
  );
};

export default MainPage;
