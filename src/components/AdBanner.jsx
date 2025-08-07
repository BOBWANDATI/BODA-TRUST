import React, { useState, useEffect } from 'react';
import './AdBanner.css';

const AdBanner = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [ads] = useState([
    {
      id: 1,
      title: 'Special Offer!',
      description: 'Get 20% off your next 5 rides with promo code BODA20',
      cta: 'Redeem Now',
      image: 'https://via.placeholder.com/800x200/FF6B00/FFFFFF?text=BodaTrust+Ad+1',
      link: '#'
    },
    {
      id: 2,
      title: 'New Premium Boda',
      description: 'Experience our premium service with luxury bikes and trained drivers',
      cta: 'Learn More',
      image: 'https://via.placeholder.com/800x200/E05D00/FFFFFF?text=BodaTrust+Ad+2',
      link: '#'
    },
    {
      id: 3,
      title: 'Referral Bonus',
      description: 'Earn UGX 5,000 for every friend who signs up and completes a ride',
      cta: 'Invite Friends',
      image: 'https://via.placeholder.com/800x200/FF8C42/FFFFFF?text=BodaTrust+Ad+3',
      link: '#'
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [ads.length]);

  return (
    <div className="ad-banner">
      <div className="ad-container">
        <img src={ads[currentAd].image} alt={ads[currentAd].title} className="ad-image" />
        <div className="ad-content">
          <h3 className="ad-title">{ads[currentAd].title}</h3>
          <p className="ad-description">{ads[currentAd].description}</p>
          <a href={ads[currentAd].link} className="ad-cta">
            {ads[currentAd].cta}
          </a>
        </div>
      </div>
      <div className="ad-indicators">
        {ads.map((ad, index) => (
          <button
            key={ad.id}
            className={`indicator ${index === currentAd ? 'active' : ''}`}
            onClick={() => setCurrentAd(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AdBanner;