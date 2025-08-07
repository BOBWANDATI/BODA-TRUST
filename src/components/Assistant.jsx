import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';
import Input from './Input';
import './Assistant.css';

const Assistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! I\'m your BodaTrust AI Assistant. How can I help you today?',
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const commonQuestions = [
    "How do I book a ride?",
    "What are your payment options?",
    "How does emergency help work?",
    "How can I earn referral rewards?"
  ];

  const botResponses = {
    "How do I book a ride?": "To book a ride, go to the 'Book Ride' section, enter your pickup and destination locations, and select from available drivers. It's quick and easy!",
    "What are your payment options?": "We accept mobile money (MTN, Airtel), credit/debit cards, and cash payments. You can also save payment methods in your wallet for faster checkout.",
    "How does emergency help work?": "In case of emergency, tap the 'Emergency Help' button. We'll immediately connect you with nearby hospitals and alert authorities with your location.",
    "How can I earn referral rewards?": "Share your referral code with friends. When they sign up and complete their first ride, you'll earn 10% of their fare directly to your wallet!"
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
    
    // Simulate bot thinking and responding
    setTimeout(() => {
      let responseText;
      
      if (botResponses[newMessage]) {
        responseText = botResponses[newMessage];
      } else {
        responseText = "I'm sorry, I don't understand that question. Here are some things I can help with:\n\n" +
          commonQuestions.map(q => `• ${q}`).join('\n');
      }
      
      const reply = {
        id: messages.length + 2,
        text: responseText,
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, reply]);
      setIsLoading(false);
    }, 1000 + Math.random() * 2000);
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
    <div className="assistant-page">
      <div className="assistant-container">
        <div className="assistant-header">
          <h1>AI Assistant</h1>
          <p>Get instant answers to your questions about BodaTrust</p>
        </div>

        <div className="assistant-chat">
          <div className="chat-messages">
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
            <h4>Quick Questions</h4>
            <div className="question-buttons">
              {commonQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickQuestion(question)}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>

          <div className="chat-input">
            <Input
              placeholder="Ask me anything about BodaTrust..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="message-input"
            />
            <Button
              variant="primary"
              onClick={handleSendMessage}
              disabled={!newMessage.trim() || isLoading}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistant;