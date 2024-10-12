// src/components/FriendRequestSection.jsx
import React from 'react';
import '../../../styles/login-style.css'; // FriendRequestSection 스타일

const FriendRequestSection = () => {
  const receivedRequests = [
    { id: 1, name: 'Alice', img: '/image/sample.jpg' },
    { id: 2, name: 'Bob', img: '/image/sample.jpg' },
    // 추가 요청 데이터
  ];

  const handleAccept = (request) => {
    // 수락 로직 구현
    alert(`Accepted friend request from ${request.name}`);
  };

  const handleDecline = (request) => {
    // 거절 로직 구현
    alert(`Declined friend request from ${request.name}`);
  };

  return (
    <section id="friend-request" className="friend-section active">
      <div className="friend-list">
        <label className="friend-title">
          Received Requests - <span className="received-request friend-count">{receivedRequests.length}</span>
        </label>
        {receivedRequests.map(request => (
          <div key={request.id} className="friend-item">
            <img src={request.img} alt="Profile" className="friend-img" />
            <div className="friend-info">
              <div className="friend-name">{request.name}</div>
            </div>
            <div className="request-confirm">
              <button onClick={() => handleAccept(request)} className="accept-btn">Accept</button>
              <button onClick={() => handleDecline(request)} className="decline-btn">Decline</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FriendRequestSection;
