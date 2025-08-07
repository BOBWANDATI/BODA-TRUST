import React from 'react';
import './HospitalLocator.css';

const HospitalLocator = () => {
  const nearbyHospitals = [
    {
      id: 1,
      name: 'Mulago National Referral Hospital',
      distance: '3.2 km',
      address: 'Kampala Hill Road, Kampala',
      contact: '0414 554 321',
      estimatedTime: '10-15 mins'
    },
    {
      id: 2,
      name: 'Case Medical Centre',
      distance: '1.5 km',
      address: 'Plot 48, Naguru Drive, Kampala',
      contact: '0414 223 445',
      estimatedTime: '5-8 mins'
    },
    {
      id: 3,
      name: 'Nakasero Hospital',
      distance: '2.8 km',
      address: 'Plot 1, Nakasero Road, Kampala',
      contact: '0414 334 567',
      estimatedTime: '8-12 mins'
    }
  ];

  return (
    <div className="hospital-locator">
      <h3>Nearby Hospitals</h3>
      <div className="hospitals-list">
        {nearbyHospitals.map((hospital) => (
          <div key={hospital.id} className="hospital-card">
            <div className="hospital-info">
              <h4>{hospital.name}</h4>
              <div className="hospital-meta">
                <span>📍 {hospital.distance} away</span>
                <span>⏱️ {hospital.estimatedTime}</span>
              </div>
              <div className="hospital-address">
                <span>🏥 {hospital.address}</span>
                <span>📞 {hospital.contact}</span>
              </div>
            </div>
            <div className="hospital-actions">
              <a href={`tel:${hospital.contact.replace(/\D/g, '')}`} className="hospital-call">
                Call Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalLocator;