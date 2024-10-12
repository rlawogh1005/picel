// // src/components/FriendOnlineSection.jsx
// import React from 'react';
// import '../../../styles/login-style.css';

// const FriendOnlineSection = () => {
//   const onlineFriends = [
//     { id: 1, name: 'James', status: 'Online', img: '/image/sample.jpg' },
//     // 추가 친구 데이터
//   ];

//   return (
//     <section id="friend-online" className="friend-section active">
//       <div className="friend-list">
//         <label className="friend-title">
//           Online - <span className="online-friend friend-count">{onlineFriends.length}</span>
//         </label>
//         {onlineFriends.map(friend => (
//           <div key={friend.id} className="friend-item">
//             <img src={friend.img} alt="Profile" className="friend-img" />
//             <div className="friend-info">
//               <div className="friend-name">{friend.name}</div>
//               <div className={`friend-status ${friend.status.toLowerCase()}`}>{friend.status}</div>
//             </div>
//             <div className="request-confirm">
//               <a href="#call-friend" className="click-icon call-friend">
//                 <img alt="Call" className="icon call-icon" src="/path/to/call-icon.png" />
//               </a>
//               <a href="#chat-friend" className="click-icon chat-friend">
//                 <img alt="Chat" className="icon chat-icon" src="/path/to/chat-icon.png" />
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FriendOnlineSection;
