
export const getAIResponse = (message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`AI response to: ${message}`);
    }, 1000);
  });
};
