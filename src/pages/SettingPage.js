// // src/pages/SettingsPage.js
// import React, { useState } from 'react';
// import AccountSetting from '../components/Formain/settings/AccountSetting';
// import VoiceSampleSetting from '../components/Formain/settings/VoiceSamplingSetting';
// import '../styles/login-style.css'; // SettingsPage 스타일 분리

// const SettingsPage = () => {
//   const [activeSetting, setActiveSetting] = useState('account-setting');

//   const handleSettingClick = (settingId) => {
//     setActiveSetting(settingId);
//   };

//   return (
//     <section id="setting" className="content-section active">
//       <div className="list">
//         <ul>
//           <li className="setting-menu" onClick={() => handleSettingClick('account-setting')}>
//             <div className="list-menu">
//               <div className="list-main">Account Settings</div>
//             </div>
//           </li>
//           <li className="setting-menu" onClick={() => handleSettingClick('voice-sample-setting')}>
//             <div className="list-menu">
//               <div className="list-main">My Voice Sample</div>
//             </div>
//           </li>
//         </ul>
//       </div>
//       <button className="toggle-list">◀</button>
//       {activeSetting === 'account-setting' && <AccountSetting />}
//       {activeSetting === 'voice-sample-setting' && <VoiceSampleSetting />}
//     </section>
//   );
// };

// export default SettingsPage;
