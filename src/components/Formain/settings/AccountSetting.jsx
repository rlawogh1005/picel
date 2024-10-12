// // src/components/AccountSetting.js
// import React, { useState, useContext } from 'react';
// import { ThemeContext } from '../../../context/ThemeContext';
// import '../../../styles/login-style.css'; 

// const AccountSetting = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const [nickname, setNickname] = useState('UserID1234');
//   const [isEditing, setIsEditing] = useState(false);
//   const [tempNickname, setTempNickname] = useState(nickname);

//   const handleEdit = () => setIsEditing(true);
//   const handleSave = () => {
//     setNickname(tempNickname);
//     setIsEditing(false);
//   };
//   const handleCancel = () => {
//     setTempNickname(nickname);
//     setIsEditing(false);
//   };

//   return (
//     <section id="account-setting" className="setting-section">
//       <div className="setting-window">
//         <div className="profile-container">
//           <div className="profile-image-wrapper">
//             <img src="/image/sample.jpg" alt="Profile Image" className="profile-image" />
//             <div className="profile-overlay" onClick={() => document.getElementById('profile-image-upload').click()}>
//               <img alt="Upload Icon" className="icon editprofile-icon" src="/path/to/upload-icon.png" />
//             </div>
//             <input type="file" id="profile-image-upload" accept="image/*" style={{ display: 'none' }} />
//           </div>
//           <div className="account-info">
//             {isEditing ? (
//               <input
//                 type="text"
//                 value={tempNickname}
//                 onChange={(e) => setTempNickname(e.target.value)}
//                 className="nickname-input"
//                 onBlur={handleSave}
//                 onKeyDown={(e) => { if (e.key === 'Enter') handleSave(); }}
//               />
//             ) : (
//               <>
//                 <div className="my-nickname">{nickname}</div>
//                 <div className="edit-nickname" onClick={handleEdit}>
//                   <img alt="Edit Icon" className="icon edit-icon" src="/path/to/edit-icon.png" />
//                 </div>
//               </>
//             )}
//           </div>
//           <div className="toggle-switch">
//             {/* 테마 토글은 Context를 이용해 통합 */}
//             <label className="switch">
//               <input
//                 type="checkbox"
//                 checked={theme === 'dark'}
//                 onChange={toggleTheme}
//               />
//               <span className="slider">
//                 <img src="/image/light.svg" alt="Light" className="light-image" />
//                 <img src="/image/dark.svg" alt="Dark" className="dark-image" />
//               </span>
//             </label>
//           </div>
//         </div>

//         <div className="setting-container">
//           <div className="setting-item">
//             <label>UID</label>
//             <span>123456789</span>
//           </div>
//           <div className="setting-item">
//             <label>Language</label>
//             <select id="language-change">
//               <option value="en">English</option>
//               <option value="ko">한국어</option>
//             </select>
//           </div>
//           <div className="setting-item">
//             <label>Setting Devices</label>
//             <div className="setting-device">
//               <select id="speaker">
//                 <option value="speaker1">Speaker 1</option>
//                 <option value="speaker2">Speaker 2</option>
//               </select>
//               <select id="microphone">
//                 <option value="mic1">Microphone 1</option>
//                 <option value="mic2">Microphone 2</option>
//               </select>
//               <select id="camera">
//                 <option value="cam1">Webcam 1</option>
//                 <option value="cam2">Webcam 2</option>
//               </select>
//             </div>
//           </div>
//           <div className="setting-item">
//             <label>Password</label>
//             <button id="password-change">Change Password</button>
//           </div>
//           <div className="setting-item">
//             <button id="save-btn">Save</button>
//           </div>
//           <div className="setting-item">
//             <button className="logout-btn">Log Out</button>
//             <button className="delete-account-btn">Delete Account</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AccountSetting;
