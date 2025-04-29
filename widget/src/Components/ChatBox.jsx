import React, { useEffect, useState } from 'react';
import socket from "../services/socket";


const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  
  useEffect(() => {
    socket.on('response', (msg) => {
      setMessages((prev) => [...prev, { sender: 'AI', text: msg }]);
    });

  
    return () => {
      socket.off('response');
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
     
      socket.emit('message', input);
      
   
      setMessages((prev) => [...prev, { sender: 'You', text: input }]);
      
     
      setInput('');
    }
  };

  return (
    <div>
      {/* Display chat history */}
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i}>
            <strong>{m.sender}:</strong> {m.text}
          </div>
        ))}
      </div>

      {/* Input field to type messages */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatBox;
