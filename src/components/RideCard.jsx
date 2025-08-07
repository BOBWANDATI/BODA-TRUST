import React from 'react';
import Button from './Button';
import './RideCard.css';

const RideCard = ({ 
  pickup, 
  destination, 
  estimatedTime, 
  price, 
  driverName, 
  driverRating, 
  vehicleType,
  onBook,
  onCancel,
  status = 'available' 
}) => {
  const getStatusClass = () => {
    switch (status) {
      case 'booked': return 'status-booked';
      case 'in-progress': return 'status-progress';
      case 'completed': return 'status-completed';
      case 'cancelled': return 'status-cancelled';
      default: return 'status-available';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'booked': return 'Booked';
      case 'in-progress': return 'In Progress';
      case 'completed': return 'Completed';
      case 'cancelled': return 'Cancelled';
      default: return 'Available';
    }
  };

  return (
    <div className="ride-card">
      <div className="ride-card-header">
        <div className="ride-status">
          <span className={`status-badge ${getStatusClass()}`}>
            {getStatusText()}
          </span>
        </div>
        <div className="ride-price">
          <span className="price-amount">UGX {price?.toLocaleString()}</span>
          <span className="price-label">Estimated</span>
        </div>
      </div>

      <div className="ride-route">
        <div className="route-point pickup">
          <div className="route-icon pickup-icon">📍</div>
          <div className="route-details">
            <span className="route-label">Pickup</span>
            <span className="route-location">{pickup}</span>
          </div>
        </div>

        <div className="route-line">
          <div className="route-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>

        <div className="route-point destination">
          <div className="route-icon destination-icon">🎯</div>
          <div className="route-details">
            <span className="route-label">Destination</span>
            <span className="route-location">{destination}</span>
          </div>
        </div>
      </div>

      <div className="ride-info">
        <div className="info-item">
          <span className="info-icon">⏱️</span>
          <span className="info-text">{estimatedTime} mins</span>
        </div>
        <div className="info-item">
          <span className="info-icon">🏍️</span>
          <span className="info-text">{vehicleType}</span>
        </div>
      </div>

      {driverName && (
        <div className="driver-info">
          <div className="driver-avatar">
            <span>{driverName.charAt(0)}</span>
          </div>
          <div className="driver-details">
            <span className="driver-name">{driverName}</span>
            <div className="driver-rating">
              <span className="rating-stars">⭐</span>
              <span className="rating-value">{driverRating}</span>
            </div>
          </div>
        </div>
      )}

      <div className="ride-actions">
        {status === 'available' && (
          <Button variant="primary" size="lg" className="btn-full" onClick={onBook}>
            Book Ride
          </Button>
        )}
        {status === 'booked' && (
          <Button variant="outline" size="lg" className="btn-full" onClick={onCancel}>
            Cancel Ride
          </Button>
        )}
        {status === 'in-progress' && (
          <Button variant="secondary" size="lg" className="btn-full" disabled>
            Ride in Progress
          </Button>
        )}
      </div>
    </div>
  );
};

export default RideCard;