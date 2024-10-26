// ChatFeed.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatFeed = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Fetch messages from the backend
  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get-messages'); // Use localhost for local development
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages(); // Fetch messages when the component mounts

    // Optionally, set an interval to refresh messages
    const interval = setInterval(() => {
      fetchMessages();
    }, 5000); // Fetch new messages every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return; // Prevent sending empty messages

    const message = { text: inputValue };

    try {
      await axios.post('http://localhost:5000/send-message', message); // Use localhost for sending messages
      setInputValue(''); // Clear input
      fetchMessages(); // Refresh messages after sending
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="chat-feed">
      <h2>Chat Feed</h2>
      <div className="messages">
        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          messages.map((message, index) => (
            <div key={index} className="message">
              <p>{message.text}</p>
            </div>
          ))
        )}
      </div>
      <form onSubmit={handleSendMessage} className="chat-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message"
          className="chat-input"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
      <style jsx>{`
        .chat-feed {
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .messages {
          max-height: 300px;
          overflow-y: auto;
          margin-bottom: 10px;
          padding: 10px;
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
        .message {
          margin-bottom: 10px;
          padding: 8px;
          background-color: #e1f5fe;
          border-radius: 4px;
        }
        .chat-form {
          display: flex;
        }
        .chat-input {
          flex: 1;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          margin-right: 10px;
        }
        .send-button {
          padding: 10px 15px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .send-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default ChatFeed;
