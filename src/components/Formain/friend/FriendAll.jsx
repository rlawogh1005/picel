// // src/components/FriendAllSection.jsx
// import React from 'react';
// import '../../../styles/login-style.css'; 

// const FriendAllSection = () => {
//   const allFriends = [
//     { id: 1, name: 'James', img: '/image/sample.jpg', status: 'Online' },
//     { id: 2, name: 'Jane', img: '/image/sample.jpg', status: 'Offline' },
//     // 추가 친구 데이터
//   ];

//   return (
//     <section id="friend-all" className="friend-section active">
//       <div className="friend-list">
//         <label className="friend-title">
//           All Friends - <span className="all-friend friend-count">{allFriends.length}</span>
//         </label>
//         {allFriends.map(friend => (
//           <div key={friend.id} className="friend-item">
//             <img src={friend.img} alt="Profile" className="friend-img" />
//             <div className="friend-info">
//               <div className="friend-name">{friend.name}</div>
//               <div className={`friend-status ${friend.status.toLowerCase()}`}>{friend.status}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FriendAllSection;
