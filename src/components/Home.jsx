import React from 'react';
import Button from './Button';
import Input from './Input';
import RideCard from './RideCard';
import './Home.css';

const Home = () => {
  const [pickup, setPickup] = React.useState('');
  const [destination, setDestination] = React.useState('');

  const availableRides = [
    {
      id: 1,
      pickup: 'Kampala Central',
      destination: 'Makerere University',
      estimatedTime: 15,
      price: 8000,
      driverName: 'Moses Kato',
      driverRating: 4.8,
      vehicleType: 'Boda Boda',
      status: 'available'
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
      status: 'available'
    }
  ];

  const handleQuickBook = () => {
    if (pickup && destination) {
      console.log('Quick booking:', { pickup, destination });
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Your Trusted <span className="text-gradient">Boda Boda</span> Partner
            </h1>
            <p className="hero-description">
              Safe, reliable, and affordable rides across Uganda. Connect with verified drivers, 
              get emergency assistance, and earn rewards with every ride.
            </p>
            
            <div className="hero-features">
              <div className="feature-item">
                <span className="feature-icon">🛡️</span>
                <span>Safe & Verified Drivers</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚨</span>
                <span>Emergency Assistance</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💰</span>
                <span>Referral Rewards</span>
              </div>
            </div>
          </div>

          <div className="hero-booking">
            <div className="booking-card">
              <h3 className="booking-title">Book Your Ride</h3>
              
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
                
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="btn-full"
                  onClick={handleQuickBook}
                  disabled={!pickup || !destination}
                >
                  Find Rides
                </Button>
              </div>

              <div className="booking-options">
                <Button variant="outline" size="md">
                  📦 Send Package
                </Button>
                <Button variant="emergency" size="md">
                  🚨 Emergency
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Rides Section */}
      <section className="available-rides">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Available Rides</h2>
            <p className="section-description">
              Choose from our verified drivers near you
            </p>
          </div>

          <div className="rides-grid">
            {availableRides.map((ride) => (
              <RideCard
                key={ride.id}
                {...ride}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;