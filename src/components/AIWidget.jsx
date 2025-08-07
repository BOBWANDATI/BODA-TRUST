import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';
import './AIWidget.css';

const AIWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hi there! I\'m your BodaTrust AI helper. Ask me anything!',
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const commonQuestions = [
    "How to book a ride?",
    "Payment options?",
    "Emergency help?",
    "Referral rewards?"
  ];

  const botResponses = {
    "How to book a ride?": "Go to 'Book Ride', enter locations, and select a driver. Easy!",
    "Payment options?": "We accept mobile money, cards, and cash. Save methods in your wallet.",
    "Emergency help?": "Tap 'Emergency Help' to alert nearby hospitals with your location.",
    "Referral rewards?": "Earn 10% of friends' first ride when they use your referral code!"
  };

  const toggleWidget = () => {
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
    setIsLoading(true);
    
    // Simulate bot response
    setTimeout(() => {
      let responseText;
      
      if (botResponses[newMessage]) {
        responseText = botResponses[newMessage];
      } else {
        responseText = "I can help with:\n" + commonQuestions.map(q => `• ${q}`).join('\n');
      }
      
      const reply = {
        id: messages.length + 2,
        text: responseText,
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, reply]);
      setIsLoading(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickQuestion = (question) => {
    setNewMessage(question);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={`ai-widget ${isOpen ? 'open' : ''}`}>
      {isOpen ? (
        <div className="widget-container">
          <div className="widget-header">
            <h3>BodaTrust AI</h3>
            <button className="close-btn" onClick={toggleWidget}>
              ×
            </button>
          </div>
          
          <div className="widget-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === 'user' ? 'sent' : 'received'}`}
              >
                <div className="message-content">
                  {message.text.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  <span className="message-time">{message.time}</span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message received">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="quick-questions">
            {commonQuestions.map((question, index) => (
              <button
                key={index}
                className="quick-question"
                onClick={() => handleQuickQuestion(question)}
              >
                {question}
              </button>
            ))}
          </div>
          
          <div className="widget-input">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button
              variant="primary"
              size="sm"
              onClick={handleSendMessage}
              disabled={!newMessage.trim() || isLoading}
            >
              Send
            </Button>
          </div>
        </div>
      ) : (
        <button className="widget-toggle" onClick={toggleWidget}>
          <span className="ai-icon">🤖</span>
          <span className="ai-label">AI Help</span>
        </button>
      )}
    </div>
  );
};

export default AIWidget;