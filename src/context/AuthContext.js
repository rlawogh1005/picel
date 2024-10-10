// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { login as loginService, signup as signupService, logout as logoutService } from '../services/AuthService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // 사용자 정보
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 초기 인증 상태 확인
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // 실제 애플리케이션에서는 토큰 검증 API 호출 필요
      setIsAuthenticated(true);
      setUser({ username: 'SampleUser', email: 'user@example.com' }); // 실제 사용자 데이터로 대체
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      setLoading(true);
      const data = await loginService(credentials);
      setIsAuthenticated(true);
      setUser({ username: data.username, email: data.email });
      setError(null);
    } catch (err) {
      setError(err.message || '로그인 실패');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userData) => {
    try {
      setLoading(true);
      const data = await signupService(userData);
      setIsAuthenticated(true);
      setUser({ username: data.username, email: data.email });
      setError(null);
    } catch (err) {
      setError(err.message || '회원가입 실패');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    logoutService();
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, loading, error, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
