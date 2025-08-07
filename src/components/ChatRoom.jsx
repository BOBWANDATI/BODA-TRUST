import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';
import Input from './Input';
import './ChatRoom.css';

const ChatRoom = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! How can I help you today?',
      sender: 'driver',
      time: '10:30 AM'
    },
    {
      id: 2,
      text: 'Hi! I\'m at the pickup location now.',
      sender: 'user',
      time: '10:31 AM'
    },
    {
      id: 3,
      text: 'Great! I\'ll be there in 2 minutes. Look for a blue boda with plate UBA 123A.',
      sender: 'driver',
      time: '10:32 AM'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
    
    // Simulate driver reply after 1-3 seconds
    setTimeout(() => {
      const replies = [
        "I'm on my way!",
        "I'll be there shortly.",
        "Thanks for letting me know.",
        "Please wait at the pickup point.",
        "I've arrived at the location."
      ];
      const reply = {
        id: messages.length + 2,
        text: replies[Math.floor(Math.random() * replies.length)],
        sender: 'driver',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, reply]);
    }, 1000 + Math.random() * 2000);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-room">
      <div className="chat-header">
        <div className="driver-info">
          <div className="driver-avatar">M</div>
          <div className="driver-details">
            <h3>Moses Kato</h3>
            <div className="driver-status">
              <span className="status-indicator online"></span>
              <span>Online</span>
            </div>
          </div>
        </div>
        <div className="ride-info">
          <div className="ride-route">
            <span>📍 Kampala Central</span>
            <span>→</span>
            <span>🎯 Makerere University</span>
          </div>
          <div className="ride-price">UGX 8,000</div>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender === 'user' ? 'sent' : 'received'}`}
          >
            <div className="message-content">
              <p>{message.text}</p>
              <span className="message-time">{message.time}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <Input
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          className="message-input"
        />
        <Button
          variant="primary"
          onClick={handleSendMessage}
          disabled={!newMessage.trim()}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatRoom;