import React, { useState } from 'react';

import Button from './Button';
import ReferralCard from './ReferralCard';
import './ReferralPage.css';

const ReferralPage = () => {
  const referralCode = 'BODATRUST123';
  const referralLink = `https://bodatrust.com/signup?ref=${referralCode}`;

  const [referralStats] = useState({
    totalReferrals: 8,
    completedRides: 5,
    earnings: 25000,
    pending: 15000
  });

  const [referralHistory] = useState([
    {
      id: 1,
      name: 'Sarah K.',
      date: '2024-01-15',
      status: 'completed',
      earnings: 5000
    },
    {
      id: 2,
      name: 'Michael M.',
      date: '2024-01-20',
      status: 'completed',
      earnings: 5000
    },
    {
      id: 3,
      name: 'David L.',
      date: '2024-01-25',
      status: 'pending',
      earnings: 5000
    },
    {
      id: 4,
      name: 'Grace N.',
      date: '2024-02-01',
      status: 'pending',
      earnings: 5000
    },
    {
      id: 5,
      name: 'Robert S.',
      date: '2024-02-05',
      status: 'completed',
      earnings: 5000
    }
  ]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    alert('Referral link copied to clipboard!');
  };

  return (
    <div className="referral-page">
      <div className="referral-container">
        <div className="referral-header">
          <h1>Refer & Earn</h1>
          <p>Invite friends to BodaTrust and earn 10% of their first ride</p>
        </div>

        <div className="referral-stats">
          <div className="stats-card">
            <h3>Your Referral Code</h3>
            <div className="referral-code">
              {referralCode}
              <Button variant="outline" size="sm" onClick={copyToClipboard}>
                Copy
              </Button>
            </div>
            <p className="referral-link">{referralLink}</p>
            <div className="share-buttons">
              <Button variant="outline" size="sm">
                📱 Share via SMS
              </Button>
              <Button variant="outline" size="sm">
                📘 Share on Facebook
              </Button>
              <Button variant="outline" size="sm">
                💬 Share on WhatsApp
              </Button>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">{referralStats.totalReferrals}</div>
              <div className="stat-label">Total Referrals</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{referralStats.completedRides}</div>
              <div className="stat-label">Completed Rides</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">KSH {referralStats.earnings.toLocaleString()}</div>
              <div className="stat-label">Total Earnings</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">KSH {referralStats.pending.toLocaleString()}</div>
              <div className="stat-label">Pending Earnings</div>
            </div>
          </div>
        </div>

        <div className="referral-history">
          <h2>Your Referral History</h2>
          {referralHistory.length > 0 ? (
            <div className="referrals-list">
              {referralHistory.map((referral) => (
                <ReferralCard
                  key={referral.id}
                  name={referral.name}
                  date={referral.date}
                  status={referral.status}
                  earnings={referral.earnings}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No referrals yet. Share your link to start earning!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReferralPage;
