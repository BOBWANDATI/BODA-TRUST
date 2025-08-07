import React from 'react';
import AdBanner from './AdBanner';
import './Ads.css';

const Ads = () => {
  const adPlaces = [
    {
      id: 1,
      name: 'Homepage Banner',
      size: '800x200',
      price: 'UGX 500,000/week',
      status: 'active'
    },
    {
      id: 2,
      name: 'Ride Booking Sidebar',
      size: '300x250',
      price: 'UGX 300,000/week',
      status: 'available'
    },
    {
      id: 3,
      name: 'Mobile App Interstitial',
      size: 'Full Screen',
      price: 'UGX 800,000/week',
      status: 'active'
    },
    {
      id: 4,
      name: 'Email Newsletter',
      size: '600x300',
      price: 'UGX 200,000/send',
      status: 'available'
    },
    {
      id: 5,
      name: 'Ride Receipt Footer',
      size: '600x100',
      price: 'UGX 150,000/week',
      status: 'available'
    }
  ];

  return (
    <div className="ads-page">
      <div className="ads-container">
        <div className="ads-header">
          <h1>Advertising Opportunities</h1>
          <p>Reach thousands of BodaTrust users with your message</p>
        </div>

        <div className="ad-example">
          <h2>Example Ad Placement</h2>
          <AdBanner />
        </div>

        <div className="ad-places">
          <h2>Available Ad Spaces</h2>
          <div className="places-grid">
            {adPlaces.map((place) => (
              <div key={place.id} className="place-card">
                <div className="place-header">
                  <h3>{place.name}</h3>
                  <span className={`place-status ${place.status}`}>
                    {place.status}
                  </span>
                </div>
                <div className="place-details">
                  <div className="place-size">
                    <span>Size:</span>
                    <span>{place.size}</span>
                  </div>
                  <div className="place-price">
                    <span>Price:</span>
                    <span>{place.price}</span>
                  </div>
                </div>
                <Button
                  variant={place.status === 'available' ? 'primary' : 'outline'}
                  size="sm"
                  className="place-cta"
                >
                  {place.status === 'available' ? 'Book Now' : 'Contact Us'}
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="ad-contact">
          <h2>Interested in Advertising?</h2>
          <p>
            Contact our sales team at <a href="mailto:ads@bodatrust.com">ads@bodatrust.com</a> or call{' '}
            <a href="tel:+256700123456">+256 700 123 456</a> for more information and custom packages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ads;