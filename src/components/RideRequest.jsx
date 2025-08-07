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
      pickup: 'Nairobi CBD',
      destination: 'Kenyatta Market',
      estimatedTime: 10,
      price: 250,
      driverName: 'Brian Otieno',
      driverRating: 4.8,
      vehicleType: 'Boda Boda',
      status: 'available'
    },
    {
      id: 2,
      pickup: 'Westlands',
      destination: 'Kileleshwa',
      estimatedTime: 15,
      price: 350,
      driverName: 'Faith Njeri',
      driverRating: 4.9,
      vehicleType: 'Boda Boda',
      status: 'available'
    },
    {
      id: 3,
      pickup: 'South B',
      destination: 'Upper Hill',
      estimatedTime: 12,
      price: 300,
      driverName: 'John Mwangi',
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
          <p>Find available drivers for your route in Kenya</p>
        </div>

        <div className="ride-request-form">
          <div className="form-row">
            <Input
              placeholder="Pickup location (e.g. Nairobi CBD)"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              icon="📍"
              size="lg"
            />
            <Input
              placeholder="Destination (e.g. Kenyatta Market)"
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
                price={`KSH ${ride.price.toLocaleString()}`}
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
