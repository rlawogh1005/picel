import axios from 'axios';

export const getMessages = (chatId) => {
  return axios.get(`/api/chat/${chatId}/messages`);
};

export const sendMessage = (chatId, messageData) => {
  return axios.post(`/api/chat/${chatId}/messages`, messageData);
};

export const deleteMessage = (chatId, messageId) => {
  return axios.delete(`/api/chat/${chatId}/messages/${messageId}`);
};