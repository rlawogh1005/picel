// MainService.js
export const fetchUserData = () => {
    // 사용자 데이터를 가져오는 API 호출 함수 (예시)
    return {
      userId: 'UserID1234',
      email: 'example@gmail.com',
    };
  };
  
  export const fetchFriendList = () => {
    // 친구 목록을 가져오는 API 호출 함수 (예시)
    return [
      { name: 'James', status: 'online' },
      { name: 'Anna', status: 'offline' },
      // 기타 친구 데이터
    ];
  };
  