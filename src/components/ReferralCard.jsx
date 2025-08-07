import React from 'react';
import './ReferralCard.css';

const ReferralCard = ({ name, date, status, earnings }) => {
  return (
    <div className="referral-card">
      <div className="referral-avatar">
        {name.charAt(0)}
      </div>
      <div className="referral-details">
        <div className="referral-name">{name}</div>
        <div className="referral-meta">
          <span className="referral-date">{date}</span>
          <span className={`referral-status ${status}`}>{status}</span>
        </div>
      </div>
      <div className="referral-earnings">
        + KSH {earnings.toLocaleString()}
      </div>
    </div>
  );
};

export default ReferralCard;
