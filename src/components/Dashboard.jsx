import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import RideCard from './RideCard';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('book-ride');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  
  const [userStats] = useState({
    totalRides: 24,
    totalSpent: 180000,
    points: 1250,
    rating: 4.8
  });

  const [recentRides] = useState([
    {
      id: 1,
      pickup: 'Kampala Central',
      destination: 'Makerere University',
      estimatedTime: 15,
      price: 8000,
      driverName: 'Moses Kato',
      driverRating: 4.8,
      vehicleType: 'Boda Boda',
      status: 'completed',
      date: '2024-01-15'
    },
    {
      id: 2,
      pickup: 'Ntinda',
      destination: 'Garden City',
      estimatedTime: 20,
      price: 12000,
      driverName: 'Sarah Nakato',
      driverRating: 4.9,
      vehicleType: 'Boda Boda',
      status: 'in-progress',
      date: '2024-01-16'
    }
  ]);

  const [nearbyDrivers] = useState([
    {
      id: 1,
      name: 'John Ssemujju',
      rating: 4.9,
      distance: '2 min away',
      vehicleType: 'Boda Boda',
      price: 8000
    },
    {
      id: 2,
      name: 'Mary Namukasa',
      rating: 4.7,
      distance: '5 min away',
      vehicleType: 'Boda Boda',
      price: 7500
    }
  ]);

  const handleBookRide = () => {
    if (pickup && destination) {
      console.log('Booking ride:', { pickup, destination });
    }
  };

  const handleEmergency = () => {
    console.log('Emergency button clicked');
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <div className="header-content">
            <h1 className="dashboard-title">Welcome back, John!</h1>
            <p className="dashboard-subtitle">Ready for your next ride?</p>
          </div>
          
          <Button variant="emergency" size="lg" onClick={handleEmergency}>
            🚨 Emergency Help
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🏍️</div>
            <div className="stat-content">
              <span className="stat-value">{userStats.totalRides}</span>
              <span className="stat-label">Total Rides</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <span className="stat-value">UGX {userStats.totalSpent.toLocaleString()}</span>
              <span className="stat-label">Total Spent</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <span className="stat-value">{userStats.rating}</span>
              <span className="stat-label">Your Rating</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-content">
              <span className="stat-value">{userStats.points}</span>
              <span className="stat-label">Reward Points</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="dashboard-content">
          {/* Sidebar */}
          <div className="dashboard-sidebar">
            <div className="tab-navigation">
              <button 
                className={`tab-btn ${activeTab === 'book-ride' ? 'active' : ''}`}
                onClick={() => setActiveTab('book-ride')}
              >
                🏍️ Book Ride
              </button>
              <button 
                className={`tab-btn ${activeTab === 'my-rides' ? 'active' : ''}`}
                onClick={() => setActiveTab('my-rides')}
              >
                📋 My Rides
              </button>
              <button 
                className={`tab-btn ${activeTab === 'nearby' ? 'active' : ''}`}
                onClick={() => setActiveTab('nearby')}
              >
                📍 Nearby Drivers
              </button>
              <button 
                className={`tab-btn ${activeTab === 'wallet' ? 'active' : ''}`}
                onClick={() => setActiveTab('wallet')}
              >
                💳 Wallet
              </button>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              <h3 className="quick-actions-title">Quick Actions</h3>
              <div className="action-buttons">
                <Button variant="outline" size="sm" className="action-btn">
                  📦 Send Package
                </Button>
                <Button variant="outline" size="sm" className="action-btn">
                  💬 Chat Support
                </Button>
                <Button variant="outline" size="sm" className="action-btn">
                  🎁 Referrals
                </Button>
                <Button variant="outline" size="sm" className="action-btn">
                  📱 Download App
                </Button>
              </div>
            </div>
          </div>

          {/* Main Panel */}
          <div className="dashboard-main">
            {activeTab === 'book-ride' && (
              <div className="tab-content">
                <div className="content-header">
                  <h2>Book a Ride</h2>
                  <p>Enter your pickup and destination to find available drivers</p>
                </div>
                
                <div className="booking-form">
                  <Input
                    placeholder="Pickup location"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    icon="📍"
                    size="lg"
                  />
                  
                  <Input
                    placeholder="Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    icon="🎯"
                    size="lg"
                  />
                  
                  <div className="booking-options">
                    <div className="option-group">
                      <label>Ride Type</label>
                      <select className="select-input">
                        <option>Regular Boda</option>
                        <option>Premium Boda</option>
                        <option>Package Delivery</option>
                      </select>
                    </div>
                    
                    <div className="option-group">
                      <label>Schedule</label>
                      <select className="select-input">
                        <option>Now</option>
                        <option>Schedule for later</option>
                      </select>
                    </div>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="btn-full"
                    onClick={handleBookRide}
                    disabled={!pickup || !destination}
                  >
                    Find Available Drivers
                  </Button>
                </div>

                <div className="estimated-info">
                  <div className="info-card">
                    <span className="info-label">Estimated Time:</span>
                    <span className="info-value">15-20 mins</span>
                  </div>
                  <div className="info-card">
                    <span className="info-label">Estimated Price:</span>
                    <span className="info-value">UGX 8,000 - 12,000</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'my-rides' && (
              <div className="tab-content">
                <div className="content-header">
                  <h2>My Rides</h2>
                  <p>View your recent and upcoming rides</p>
                </div>
                
                <div className="rides-list">
                  {recentRides.map((ride) => (
                    <RideCard
                      key={ride.id}
                      {...ride}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'nearby' && (
              <div className="tab-content">
                <div className="content-header">
                  <h2>Nearby Drivers</h2>
                  <p>Available drivers in your area</p>
                </div>
                
                <div className="drivers-list">
                  {nearbyDrivers.map((driver) => (
                    <div key={driver.id} className="driver-card">
                      <div className="driver-info">
                        <div className="driver-avatar">
                          {driver.name.charAt(0)}
                        </div>
                        <div className="driver-details">
                          <h4>{driver.name}</h4>
                          <div className="driver-meta">
                            <span>⭐ {driver.rating}</span>
                            <span>📍 {driver.distance}</span>
                            <span>🏍️ {driver.vehicleType}</span>
                          </div>
                        </div>
                      </div>
                      <div className="driver-price">
                        <span className="price">UGX {driver.price.toLocaleString()}</span>
                        <Button variant="primary" size="sm">
                          Book
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wallet' && (
              <div className="tab-content">
                <div className="content-header">
                  <h2>Wallet</h2>
                  <p>Manage your payments and rewards</p>
                </div>
                
                <div className="wallet-content">
                  <div className="wallet-balance">
                    <div className="balance-card">
                      <h3>Current Balance</h3>
                      <div className="balance-amount">UGX 45,000</div>
                      <div className="balance-actions">
                        <Button variant="primary" size="sm">Add Money</Button>
                        <Button variant="outline" size="sm">Withdraw</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="payment-methods">
                    <h3>Payment Methods</h3>
                    <div className="method-list">
                      <div className="payment-method">
                        <span className="method-icon">💳</span>
                        <span>Mobile Money (**** 1234)</span>
                        <span className="method-status">Primary</span>
                      </div>
                      <div className="payment-method">
                        <span className="method-icon">🏦</span>
                        <span>Bank Card (**** 5678)</span>
                        <Button variant="ghost" size="sm">Remove</Button>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Add Payment Method</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;