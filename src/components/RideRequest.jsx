import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import RideCard from './RideCard';
import './RideRequest.css';

const RideRequest = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [rideType, setRideType] = useState('regular');
  const [schedule, setSchedule] = useState('now');
  const [availableRides] = useState([
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
    },
    {
      id: 3,
      pickup: 'Kibuli',
      destination: 'Nakawa',
      estimatedTime: 12,
      price: 7000,
      driverName: 'James Ssemambo',
      driverRating: 4.7,
      vehicleType: 'Boda Boda',
      status: 'available'
    }
  ]);

  const handleBookRide = (rideId) => {
    console.log('Booking ride:', rideId);
  };

  const handleRequest = () => {
    if (pickup && destination) {
      console.log('Ride request:', {
        pickup,
        destination,
        rideType,
        schedule
      });
    }
  };

  return (
    <div className="ride-request-page">
      <div className="ride-request-container">
        <div className="ride-request-header">
          <h1>Request a Ride</h1>
          <p>Find available drivers for your route</p>
        </div>

        <div className="ride-request-form">
          <div className="form-row">
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
          </div>

          <div className="form-options">
            <div className="option-group">
              <label>Ride Type</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="rideType"
                    value="regular"
                    checked={rideType === 'regular'}
                    onChange={() => setRideType('regular')}
                  />
                  <span>Regular Boda</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="rideType"
                    value="premium"
                    checked={rideType === 'premium'}
                    onChange={() => setRideType('premium')}
                  />
                  <span>Premium Boda</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="rideType"
                    value="delivery"
                    checked={rideType === 'delivery'}
                    onChange={() => setRideType('delivery')}
                  />
                  <span>Package Delivery</span>
                </label>
              </div>
            </div>

            <div className="option-group">
              <label>Schedule</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="schedule"
                    value="now"
                    checked={schedule === 'now'}
                    onChange={() => setSchedule('now')}
                  />
                  <span>Ride Now</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="schedule"
                    value="later"
                    checked={schedule === 'later'}
                    onChange={() => setSchedule('later')}
                  />
                  <span>Schedule for Later</span>
                </label>
              </div>
            </div>
          </div>

          <Button
            variant="primary"
            size="lg"
            className="btn-full"
            onClick={handleRequest}
            disabled={!pickup || !destination}
          >
            Find Available Rides
          </Button>
        </div>

        <div className="available-rides">
          <h2>Available Rides</h2>
          <div className="rides-grid">
            {availableRides.map((ride) => (
              <RideCard
                key={ride.id}
                {...ride}
                onBook={() => handleBookRide(ride.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideRequest;