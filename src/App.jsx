// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components from /components/
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import RideRequest from './components/RideRequest';
import TripRequest from './components/TripRequest';
import EmergencyHelp from './components/EmergencyHelp';
import ReferralPage from './components/ReferralPage';
import ChatRoom from './components/ChatRoom';
import Assistant from './components/Assistant';
import AdBanner from './components/AdBanner'; // Was listed as "Ads"
import NotFound from './components/NotFound';
import AIWidget from './components/AIWidget';
import Chatbox from './components/Chatbox';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ride-request" element={<RideRequest />} />
            <Route path="/trip-request" element={<TripRequest />} />
            <Route path="/emergency-help" element={<EmergencyHelp />} />
            <Route path="/referrals" element={<ReferralPage />} />
            <Route path="/chat" element={<ChatRoom />} />
            <Route path="/assistant" element={<Assistant />} />
            <Route path="/ads" element={<AdBanner />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <AIWidget />
        <Chatbox />
      </div>
    </Router>
  );
}

export default App;
