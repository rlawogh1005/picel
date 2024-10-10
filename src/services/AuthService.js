// src/services/authService.js
import axios from 'axios';

const API_BASE_URL = 'https://api.yourdomain.com'; // 실제 API URL로 변경

/**
 * 사용자 로그인
 * @param {Object} credentials - { username, password }
 * @returns {Promise<Object>} - 로그인 응답 데이터
 */
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials, {
      headers: { 'Content-Type': 'application/json' },
    });
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error('Network Error');
  }
};

/**
 * 사용자 회원가입
 * @param {Object} userData - { username, password, email }
 * @returns {Promise<Object>} - 회원가입 응답 데이터
 */
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData, {
      headers: { 'Content-Type': 'application/json' },
    });
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error('Network Error');
  }
};

/**
 * 사용자 로그아웃
 */
export const logout = () => {
  localStorage.removeItem('token');
};
