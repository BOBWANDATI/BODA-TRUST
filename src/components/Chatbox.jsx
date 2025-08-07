import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';
import './Chatbox.css';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! How can I help you today?',
      sender: 'bot',
      time: '10:30 AM'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

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
    
    // Simulate bot reply after 1-2 seconds
    setTimeout(() => {
      const replies = [
        "I'm here to help with any questions about BodaTrust.",
        "You can ask me about rides, payments, or emergencies.",
        "Thanks for your message! How can I assist you?",
        "I'll do my best to answer your questions.",
        "Let me know if you need help with anything specific."
      ];
      const reply = {
        id: messages.length + 2,
        text: replies[Math.floor(Math.random() * replies.length)],
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, reply]);
    }, 1000 + Math.random() * 1000);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={`chatbox-container ${isOpen ? 'open' : ''}`}>
      {isOpen ? (
        <div className="chatbox-window">
          <div className="chatbox-header">
            <h3>BodaTrust Support</h3>
            <button className="close-btn" onClick={toggleChat}>
              ×
            </button>
          </div>
          
          <div className="chatbox-messages">
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
          
          <div className="chatbox-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button
              variant="primary"
              size="sm"
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
            >
              Send
            </Button>
          </div>
        </div>
      ) : (
        <button className="chatbox-toggle" onClick={toggleChat}>
          💬
        </button>
      )}
    </div>
  );
};

export default Chatbox;