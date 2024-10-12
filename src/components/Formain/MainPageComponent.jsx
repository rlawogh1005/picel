// MainPageComponent.jsx
import React, { useState, useEffect, useContext } from 'react';
import '../../styles/login-style.css'; // 제공된 CSS 파일
import { fetchUserData, fetchFriendList } from '../../services/MainService';
import { AuthContext } from '../../context/AuthContext'; // AuthContext 사용
import { ThemeContext } from '../../context/ThemeContext'; // ThemeContext 사용

function MainPageComponent() {
  // 현재 날짜와 시간 상태
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  // GNB 메뉴 상태
  const [activeGnbSection, setActiveGnbSection] = useState('friend');

  // 서브 섹션 상태
  const [activeFriendSection, setActiveFriendSection] = useState('friend-online');
  const [activeSettingSection, setActiveSettingSection] = useState('account-setting');

  // 팝업 상태
  const [isNoticePopupVisible, setIsNoticePopupVisible] = useState(false);
  const [isLogoutPopupVisible, setIsLogoutPopupVisible] = useState(false);
  const [isDeletePopupVisible, setIsDeletePopupVisible] = useState(false);

  // 사용자 데이터 상태
  const [userData, setUserData] = useState({});
  const [friendList, setFriendList] = useState([]);

  const { logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  // 날짜 및 시간 업데이트
  useEffect(() => {
    const updateDateTime = () => {
      const today = new Date();
      const month = ('0' + (today.getMonth() + 1)).slice(-2);
      const day = ('0' + today.getDate()).slice(-2);
      setCurrentDate(`${month} / ${day}`);

      let hours = today.getHours();
      const minutes = ('0' + today.getMinutes()).slice(-2);
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      setCurrentTime(`${hours} : ${minutes} ${ampm}`);
    };

    updateDateTime(); // 초기 호출
    const timer = setInterval(updateDateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  // 사용자 데이터 및 친구 목록 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await fetchUserData(); // 비동기 호출
        setUserData(user);

        const friends = await fetchFriendList(); // 비동기 호출
        setFriendList(friends);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchData();
  }, []);

  // 로그아웃 핸들러
  const handleLogout = () => {
    setIsLogoutPopupVisible(false);
    logout(); // AuthContext의 logout 함수 호출
    alert('Logged out!');
    // 추가적인 로그아웃 로직 처리
  };

  // 삭제 확인 핸들러
  const handleDeleteConfirm = () => {
    setIsDeletePopupVisible(false);
    // 삭제 로직 처리
    alert('Account deleted!');
  };

  return (
    <div className="container">
      {/* 로그아웃 팝업 */}
      {isLogoutPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <p>Do you want to log out?</p>
            <button className="confirm-logout" onClick={handleLogout}>
              Log Out
            </button>
            <button
              className="cancel-logout"
              onClick={() => setIsLogoutPopupVisible(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* 삭제 확인 팝업 */}
      {isDeletePopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <p>Are you sure you want to delete this?</p>
            <button className="confirm-delete" onClick={handleDeleteConfirm}>
              Delete
            </button>
            <button
              className="cancel-delete"
              onClick={() => setIsDeletePopupVisible(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}


      {/* 네비게이션 바 */}
      <nav className="gnb">
        <ul className="menu">
          <li>
            <a href="#calendar">
              <img alt="Calendar" className="icon calendar-icon" src = "../../assets/images/calendar_light.svg" />
              <span className="today">{currentDate}</span>
            </a>
          </li>
          <li>
            <a href="#clock">
              <img alt="Clock" className="icon clock-icon" src = "../../assets/images/clock_dark.svg" />
              <span className="time-now">{currentTime}</span>
            </a>
          </li>
          <li className="gnb-line"></li>
          <li
            className={`click-menu ${activeGnbSection === 'friend' ? 'active' : ''}`}
            onClick={() => setActiveGnbSection('friend')}
          >
            <a href="#friend">
              <img alt="Friend" className="icon friend-icon" src = "../../assets/images/friend_dark.svg" />
              Friend
            </a>
          </li>
          <li
            className={`click-menu ${activeGnbSection === 'chat' ? 'active' : ''}`}
            onClick={() => setActiveGnbSection('chat')}
          >
            <a href="#chat">
              <img alt="Chat" className="icon chat-icon" src = "../../assets/images/chat_dark.svg" />
              Chat
            </a>
          </li>
          <li
            className={`click-menu ${activeGnbSection === 'setting' ? 'active' : ''}`}
            onClick={() => setActiveGnbSection('setting')}
          >
            <a href="#setting">
              <img alt="Setting" className="icon setting-icon" src = "../../assets/images/setting_dark.svg" />
              Setting
            </a>
          </li>
          <li
            className={`click-menu notice-menu ${isNoticePopupVisible ? 'active' : ''}`}
            onClick={() => setIsNoticePopupVisible(!isNoticePopupVisible)}
          >
            <a href="#notice">
              <img alt="Notice" className="icon notice-icon" src = "../../assets/images/notice_dark.svg" />
              Notice
            </a>
          </li>
        </ul>
        {/* 알림 팝업 */}
        {isNoticePopupVisible && (
          <div className="notice-popup">
            <ul>
              <li>
                <img alt="Chat" className="icon chat-icon" src = "../../assets/images/chat_dark.svg" />
                John Doe
              </li>
              <li>
                <img alt="Friend Request" className="icon friend-icon" src = "../../assets/images/friend_dark.svg" />
                Jane Smith
              </li>
            </ul>
          </div>
        )}
        {/* 프로필 섹션 */}
        <ul>
          <li className="profile">
            <a href="#profile">
              
              <div className="profile-info">
                <div className="user-id">{userData.userId}</div>
                <div className="user-email">{userData.email}</div>
              </div>
            </a>
          </li>
        </ul>
      </nav>

      {/* 메인 콘텐츠 */}
      <div className="content">
        {/* Friend 섹션 */}
        {activeGnbSection === 'friend' && (
          <section id="friend" className="content-section active">
            {/* 리스트 및 토글 버튼 */}
            <div className="list">
              <ul>
                {/* Friend 메뉴 아이템들 */}
                <li
                  className={`friend-menu ${activeFriendSection === 'friend-online' ? 'active' : ''}`}
                  onClick={() => setActiveFriendSection('friend-online')}
                >
                  <a href="#friend-online">
                    <div className="list-menu">
                      <div className="list-main">Online</div>
                      <div className="list-sub">
                        Friends currently online
                        <span className="online-friend friend-count">{friendList.filter(friend => friend.status === 'online').length}</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li
                  className={`friend-menu ${activeFriendSection === 'friend-all' ? 'active' : ''}`}
                  onClick={() => setActiveFriendSection('friend-all')}
                >
                  <a href="#friend-all">
                    <div className="list-menu">
                      <div className="list-main">All</div>
                      <div className="list-sub">
                        View all friends
                        <span className="all-friend friend-count">{friendList.length}</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li
                  className={`friend-menu ${activeFriendSection === 'add-friend' ? 'active' : ''}`}
                  onClick={() => setActiveFriendSection('add-friend')}
                >
                  <a href="#add-friend">
                    <div className="list-menu">
                      <div className="list-main">Add</div>
                      <div className="list-sub">
                        Sent Requests
                        <span className="sent-request friend-count">2</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li
                  className={`friend-menu ${activeFriendSection === 'friend-request' ? 'active' : ''}`}
                  onClick={() => setActiveFriendSection('friend-request')}
                >
                  <a href="#friend-request">
                    <div className="list-menu">
                      <div className="list-main">Request</div>
                      <div className="list-sub">
                        Received Requests
                        <span className="received-request friend-count">4</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <button className="toggle-list">◀</button>
            {/* 온라인 친구 섹션 */}
            {activeFriendSection === 'friend-online' && (
              <section id="friend-online" className="friend-section">
                <div className="friend-list">
                  <label className="friend-title">
                    Online - <span className="online-friend friend-count">{friendList.filter(friend => friend.status === 'online').length}</span>
                  </label>
                  {/* 친구 아이템들 */}
                  {friendList.filter(friend => friend.status === 'online').map((friend, index) => (
                    <div className="friend-item" key={index}>
                      <img
                        
                        alt="Profile"
                        className="friend-img"
                      />
                      <div className="friend-info">
                        <div className="friend-name">{friend.name}</div>
                        <div
                          className={`friend-status ${friend.status === 'online' ? 'online' : 'offline'}`}
                        >
                          {friend.status.charAt(0).toUpperCase() + friend.status.slice(1)}
                        </div>
                      </div>
                      <div className="request-confirm">
                        <a href="#call-friend" className="click-icon call-friend">
                          <img alt="Call" className="icon call-icon" src = "../../assets/images/call_dark.svg" />
                        </a>
                        <a href="#chat-friend" className="click-icon chat-friend">
                          <img alt="Chat" className="icon chat-icon" src = "../../assets/images/chat_dark.svg" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
            {/* All Friends 섹션 */}
            {activeFriendSection === 'friend-all' && (
              <section id="friend-all" className="friend-section">
                <div className="friend-list">
                  <label className="friend-title">All Friends - <span className="all-friend friend-count">{friendList.length}</span></label>
                  {friendList.map((friend, index) => (
                    <div className="friend-item" key={index}>
                      
                      <div className="friend-info">
                        <div className="friend-name">{friend.name}</div>
                        <div className={`friend-status ${friend.status === 'online' ? 'online' : 'offline'}`}>
                          {friend.status.charAt(0).toUpperCase() + friend.status.slice(1)}
                        </div>
                      </div>
                      <div className="request-confirm">
                        <a href="#chat-friend" className="click-icon chat-friend">
                          <img alt="Chat" className="icon chat-icon" src = "../../assets/images/chat_dark.svg" />
                        </a>
                        <a href="#delete-friend" className="click-icon decline-friend" onClick={() => setIsDeletePopupVisible(true)}>
                          <img alt="Delete" className="icon delete-icon" src = "../../assets/images/delete_dark.svg" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
            {/* Add Friend 섹션 */}
            {activeFriendSection === 'add-friend' && (
              <section id="add-friend" className="friend-section">
                <div className="friend-list">
                  <div className="add-friend-container">
                    <label htmlFor="friend-uid">Enter Friend's UID</label>
                    <form id="add-friend-form" onSubmit={(e) => { e.preventDefault(); /* 친구 추가 로직 */ alert('Friend request sent!'); }}>
                      <input type="text" id="friend-uid" name="friend-uid" placeholder="Send a friend request using the user's UID" required />
                      <button type="submit" className="send-friend-request-btn">Send Friend Request</button>
                    </form>
                  </div>
                  <div className="sent-request-list">
                    <label className="friend-title">Sent Requests - <span className="sent-request friend-count">2</span></label>
                    {/* 예시로 두 개의 친구 아이템 추가 */}
                    <div className="friend-item">
                      
                      <div className="friend-info">
                        <div className="friend-name">James</div>
                        <div className="friend-status online">Online</div>
                      </div>
                      <div className="request-confirm">
                        <a href="#cancel-request" className="click-icon cancel-request" onClick={() => alert('Request cancelled!')}>
                          <img alt="Cancel" className="icon x-icon" src = "../../assets/images/confirm_dark.svg" />
                        </a>
                      </div>
                    </div>
                    {/* 추가 친구 아이템들 */}
                  </div>
                </div>
              </section>
            )}
            {/* Friend Request 섹션 */}
            {activeFriendSection === 'friend-request' && (
              <section id="friend-request" className="friend-section">
                <div className="friend-list received-request-list">
                  <label className="friend-title">Received Requests - <span className="received-friend friend-count">4</span></label>
                  {/* 예시로 네 개의 친구 요청 아이템 추가 */}
                  <div className="friend-item">
                    
                    <div className="friend-info">
                      <div className="friend-name">Requesting Friend 1</div>
                      <div className="friend-status offline">Offline</div>
                    </div>
                    <div className="request-confirm">
                      <a href="#accept-friend" className="click-icon accept-friend" onClick={() => alert('Friend request accepted!')}>
                        <img alt="Accept" className="icon confirm-icon" src = "../../assets/images/confirm_dark.svg" />
                      </a>
                      <a href="#decline-friend" className="click-icon decline-friend" onClick={() => alert('Friend request declined!')}>
                        <img alt="Decline" className="icon x-icon" src = "../../assets/images/" />
                      </a>
                    </div>
                  </div>
                  {/* 추가 친구 요청 아이템들 */}
                </div>
              </section>
            )}
          </section>
        )}

        {/* Chat 섹션 */}
        {activeGnbSection === 'chat' && (
          <section id="chat" className="content-section active">
            {/* 리스트 및 토글 버튼 */}
            <div className="list">
              <div className="list-title">
                <p>Chat</p>
                <a href="#addchat" className="click-icon">
                  <img alt="Add Chat" className="icon addchat-icon" src = "../../assets/images/addchat_dark.svg" />
                </a>
              </div>
              <div className="search-container">
                <img alt="Search" className="icon search-icon" src = "../../assets/images/search_dark.svg" />
                <input className="search" type="text" placeholder="Search chats..." />
              </div>
              <ul>
                {/* 채팅 메뉴 아이템들 */}
                <li className="chat-menu">
                  <a href="#chat1">
                    
                    <div className="list-menu">
                      <div className="list-main">James</div>
                      <div className="list-sub">This is example. This is example. This is example. This is example. This is example. This is example.</div>
                    </div>
                  </a>
                </li>
                <li className="chat-menu">
                  <a href="#chat2">
                    
                    <div className="list-menu">
                      <div className="list-main">James</div>
                      <div className="list-sub">This is example.</div>
                    </div>
                  </a>
                </li>
                {/* 추가 채팅 메뉴 아이템들 */}
              </ul>
            </div>
            <button className="toggle-list">◀</button>
            {/* 채팅 윈도우 */}
            <div className="chat-window">
              <div className="chat-title">
                <div className="title-info">
                
                </div>
                <div className="title-setting">
                  <a href="#delete-chat" className="click-icon" onClick={() => alert('Chat deleted!')}>
                    <img className="icon delete-icon" src="../../assets/images/delete_light.svg" alt="Delete Chat" />
                  </a>
                  <a href="#edit-chat" className="click-icon" onClick={() => alert('Chat edited!')}>
                    <img className="icon edit-icon" src="../../assets/images/edit_dark.svg" alt="Edit Chat" />
                  </a>
                  <a href="#call" className="click-icon" onClick={() => alert('Call initiated!')}>
                    <img className="icon call-icon" src="../../assets/images/call_dark.svg" alt="Call" />
                  </a>
                </div>
              </div>
              <div className="chat-messages">
                {/* 채팅 메시지 로그 */}
                {Array.from({ length: 8 }).map((_, index) => (
                  <div className="chat-log" key={index}>
                    
                    <div className="chat-log-txt">
                      <div className="log-name">James</div>
                      <div className="log-txt">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </div>
                      <div className="log-time">8/15/24 2:30 PM</div>
                      <div className="log-menu hidden">
                        <a href="#copy-message" className="copy-message">Copy</a>
                        <a href="#delete-message" className="delete-message">Delete</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="chat-input">
                <input type="text" className="send-message" name="chat-message" placeholder="Type a message..." />
                <button type="button" className="send-message-btn" onClick={() => alert('Message sent!')}>
                  Send <img alt="Send" className="icon send-icon" src="../../assets/images/send_dark.svg" />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Setting 섹션 */}
        {activeGnbSection === 'setting' && (
          <section id="setting" className="content-section active">
            <div className="list">
              <ul>
                <li
                  className={`setting-menu ${activeSettingSection === 'account-setting' ? 'active' : ''}`}
                  onClick={() => setActiveSettingSection('account-setting')}
                >
                  <a href="#account-setting">
                    <div className="list-menu">
                      <div className="list-main">Account Settings</div>
                    </div>
                  </a>
                </li>
                <li
                  className={`setting-menu ${activeSettingSection === 'voice-sample-setting' ? 'active' : ''}`}
                  onClick={() => setActiveSettingSection('voice-sample-setting')}
                >
                  <a href="#voice-sample-setting">
                    <div className="list-menu">
                      <div className="list-main">My Voice Sample</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <button className="toggle-list">◀</button>
            {/* 계정 설정 섹션 */}
            {activeSettingSection === 'account-setting' && (
              <section id="account-setting" className="setting-section">
                <div className="setting-window">
                  <div className="profile-container">
                    <div className="profile-image-wrapper">
                      
                      <div className="profile-overlay" onClick={() => document.getElementById('profile-image-upload').click()}>
                        <img alt="Upload Icon" className="icon editprofile-icon" src="" />
                      </div>
                      <input
                        type="file"
                        id="profile-image-upload"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={(e) => { /* 프로필 이미지 업로드 로직 */ alert('Profile image uploaded!'); }}
                      />
                    </div>
                    <div className="account-info">
                      <div className="my-nickname">{userData.userId}</div>
                      <div className="edit-nickname" onClick={() => alert('Nickname editing!')}>
                        <img alt="Edit Icon" className="icon edit-icon" src="../../assets/images/editprofile_dark.svg" />
                      </div>
                    </div>
                    <div className="toggle-switch">
                      <label className="switch">
                        <input type="checkbox" id="mode-toggle" checked={theme === 'dark'} onChange={toggleTheme} />
                        <span className="slider">
                          <img src="../../assets/images/light.svg" alt="Light" className="light-image" />
                          <img src="../../assets/images/dark.svg" alt="Dark" className="dark-image" />
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="setting-container">
                    <div className="setting-item">
                      <label htmlFor="uid">UID</label>
                      <span id="my-uid">{userData.id}</span>
                    </div>
                    <div className="setting-item">
                      <label htmlFor="language-change">Language</label>
                      <select id="language-change" onChange={(e) => alert(`Language changed to ${e.target.value}`)}>
                        <option value="en">English</option>
                        <option value="ko">한국어</option>
                      </select>
                    </div>
                    <div className="setting-item">
                      <label htmlFor="setting-device">Setting Devices</label>
                      <div className="setting-device">
                        <select id="speaker" onChange={(e) => alert(`Speaker changed to ${e.target.value}`)}>
                          <option value="speaker1">Speaker 1</option>
                          <option value="speaker2">Speaker 2</option>
                        </select>
                        <select id="microphone" onChange={(e) => alert(`Microphone changed to ${e.target.value}`)}>
                          <option value="mic1">Microphone 1</option>
                          <option value="mic2">Microphone 2</option>
                        </select>
                        <select id="camera" onChange={(e) => alert(`Camera changed to ${e.target.value}`)}>
                          <option value="cam1">Webcam 1</option>
                          <option value="cam2">Webcam 2</option>
                        </select>
                      </div>
                    </div>
                    <div className="setting-item">
                      <label htmlFor="password-change">Password</label>
                      <button id="password-change" onClick={() => alert('Password change initiated!')}>Change Password</button>
                    </div>
                    <div className="setting-item">
                      <button id="save-btn" onClick={() => alert('Settings saved!')}>Save</button>
                    </div>
                    <div className="setting-item">
                      <button className="logout-btn" onClick={() => setIsLogoutPopupVisible(true)}>Log Out</button>
                      <button className="delete-account-btn" onClick={() => setIsDeletePopupVisible(true)}>Delete Account</button>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Voice Sample 설정 섹션 */}
            {activeSettingSection === 'voice-sample-setting' && (
              <section id="voice-sample-setting" className="setting-section">
                <div className="setting-window">
                  {/* Voice Sample 설정 내용 */}
                  <p>Voice Sample 설정을 여기에 추가하세요.</p>
                </div>
              </section>
            )}
          </section>
        )}
      </div>
    </div>
  );
}

export default MainPageComponent;
