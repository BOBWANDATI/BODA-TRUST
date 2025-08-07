import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';
import Input from './Input';
import './ChatRoom.css';

const ChatRoom = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Habari! Nisaidie vipi leo?',
      sender: 'driver',
      time: '10:30 AM'
    },
    {
      id: 2,
      text: 'Niko kwa pickup location sasa.',
      sender: 'user',
      time: '10:31 AM'
    },
    {
      id: 3,
      text: 'Sawa! Nitafika ndani ya dakika 2. Angalia boda ya blue namba KDA 123X.',
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

    // Simulate driver reply after 1–3 seconds
    setTimeout(() => {
      const replies = [
        "Niko njiani!",
        "Nitafika sasa hivi.",
        "Ahsante kwa ujumbe.",
        "Tafadhali subiri hapo hapo.",
        "Nimefika kwa location."
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
          <div className="driver-avatar">B</div>
          <div className="driver-details">
            <h3>Brian Otieno</h3>
            <div className="driver-status">
              <span className="status-indicator online"></span>
              <span>Online</span>
            </div>
          </div>
        </div>
        <div className="ride-info">
          <div className="ride-route">
            <span>📍 Nairobi CBD</span>
            <span>→</span>
            <span>🎯 Kenyatta Market</span>
          </div>
          <div className="ride-price">KSH 250</div>
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
          placeholder="Andika ujumbe wako..."
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
          Tuma
        </Button>
      </div>
    </div>
  );
};

export default ChatRoom;
