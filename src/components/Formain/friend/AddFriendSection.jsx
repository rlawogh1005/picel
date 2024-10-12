// src/components/AddFriendSection.jsx
import React, { useState } from 'react';
import '../../../styles/login-style.css'; // AddFriendSection 스타일

const AddFriendSection = () => {
  const [friendUID, setFriendUID] = useState('');

  const handleAddFriend = (e) => {
    e.preventDefault();
    // 친구 추가 로직 구현
    alert(`Friend request sent to UID: ${friendUID}`);
    setFriendUID('');
  };

  return (
    <section id="add-friend" className="friend-section active">
      <div className="add-friend-container">
        <label htmlFor="friend-uid">Add Friend by UID</label>
        <form onSubmit={handleAddFriend}>
          <input
            id="friend-uid"
            type="text"
            value={friendUID}
            onChange={(e) => setFriendUID(e.target.value)}
            placeholder="Enter Friend UID"
          />
          <button type="submit" className="send-friend-request-btn">Send Request</button>
        </form>
      </div>
      {/* Sent Requests List (예시) */}
      <div className="sent-request-list">
        <label className="friend-title">Sent Requests</label>
        {/* Sent 요청 목록 렌더링 */}
      </div>
    </section>
  );
};

export default AddFriendSection;
