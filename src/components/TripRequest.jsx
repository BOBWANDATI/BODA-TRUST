import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import RideCard from './RideCard';
import './TripRequest.css';

const TripRequest = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [rideType, setRideType] = useState('regular');
  const [scheduledRides] = useState([
    {
      id: 1,
      pickup: 'Kampala Central',
      destination: 'Makerere University',
      date: '2024-02-15',
      time: '08:30 AM',
      price: 8000,
      driverName: 'Moses Kato',
      driverRating: 4.8,
      vehicleType: 'Boda Boda',
      status: 'scheduled'
    },
    {
      id: 2,
      pickup: 'Ntinda',
      destination: 'Garden City',
      date: '2024-02-16',
      time: '05:00 PM',
      price: 12000,
      driverName: 'Sarah Nakato',
      driverRating: 4.9,
      vehicleType: 'Boda Boda',
      status: 'scheduled'
    }
  ]);

  const handleScheduleRide = () => {
    if (pickup && destination && date && time) {
      console.log('Scheduling ride:', {
        pickup,
        destination,
        date,
        time,
        rideType
      });
    }
  };

  const handleCancelRide = (rideId) => {
    console.log('Canceling ride:', rideId);
  };

  return (
    <div className="trip-request-page">
      <div className="trip-request-container">
        <div className="trip-request-header">
          <h1>Schedule a Ride</h1>
          <p>Book your ride in advance for a hassle-free experience</p>
        </div>

        <div className="trip-request-form">
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

          <div className="form-row">
            <div className="input-group">
              <label>Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            <div className="input-group">
              <label>Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>

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

          <Button
            variant="primary"
            size="lg"
            className="btn-full"
            onClick={handleScheduleRide}
            disabled={!pickup || !destination || !date || !time}
          >
            Schedule Ride
          </Button>
        </div>

        <div className="scheduled-rides">
          <h2>Your Scheduled Rides</h2>
          {scheduledRides.length > 0 ? (
            <div className="rides-list">
              {scheduledRides.map((ride) => (
                <RideCard
                  key={ride.id}
                  {...ride}
                  estimatedTime={`${ride.date} at ${ride.time}`}
                  status="booked"
                  onCancel={() => handleCancelRide(ride.id)}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>You don't have any scheduled rides yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripRequest;