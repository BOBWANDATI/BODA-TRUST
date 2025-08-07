import React, { useState } from 'react';
import Button from './Button';
import HospitalLocator from './HospitalLocator';
import './EmergencyHelp.css';

const EmergencyHelp = () => {
  const [emergencyType, setEmergencyType] = useState('medical');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Emergency request:', { emergencyType, location, description });
    setIsSubmitted(true);
  };

  return (
    <div className="emergency-page">
      <div className="emergency-container">
        {!isSubmitted ? (
          <>
            <div className="emergency-header">
              <h1>Emergency Assistance</h1>
              <p>Get immediate help in case of an emergency</p>
            </div>

            <form className="emergency-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Emergency Type</label>
                <div className="emergency-types">
                  <button
                    type="button"
                    className={`emergency-type ${emergencyType === 'medical' ? 'active' : ''}`}
                    onClick={() => setEmergencyType('medical')}
                  >
                    🚑 Medical Emergency
                  </button>
                  <button
                    type="button"
                    className={`emergency-type ${emergencyType === 'accident' ? 'active' : ''}`}
                    onClick={() => setEmergencyType('accident')}
                  >
                    🚨 Accident
                  </button>
                  <button
                    type="button"
                    className={`emergency-type ${emergencyType === 'security' ? 'active' : ''}`}
                    onClick={() => setEmergencyType('security')}
                  >
                    🛡️ Security Threat
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="location">Your Location</label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your current location"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Emergency Description</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Briefly describe the emergency situation"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="emergency-actions">
                <Button variant="emergency" size="lg" className="btn-full" type="submit">
                  🚨 Request Emergency Help
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="emergency-success">
            <div className="success-icon">✅</div>
            <h2>Emergency Request Received!</h2>
            <p>Help is on the way. We've alerted the nearest {emergencyType === 'medical' ? 'medical facility' : 'authorities'} to your location.</p>
            <p>Stay on this page for updates.</p>
            
            <div className="emergency-status">
              <div className="status-item">
                <span className="status-icon">📞</span>
                <span>Contacting emergency services...</span>
              </div>
              <div className="status-item">
                <span className="status-icon">📍</span>
                <span>Nearest help: 5-10 minutes away</span>
              </div>
            </div>

            <HospitalLocator />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmergencyHelp;