export const saveChat = (messages) => {
  localStorage.setItem('chatHistory', JSON.stringify(messages));
};

export const loadChat = () => {
  return JSON.parse(localStorage.getItem('chatHistory') || '[]');
};
