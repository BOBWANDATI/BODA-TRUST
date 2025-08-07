import React from 'react';
import './ReferralCard.css';

const ReferralCard = ({
  name = "Unknown",
  date = "N/A",
  status = "pending",
  earnings = 0
}) => {
  // Format the earnings in Kenyan Shilling (KSH) format
  const formattedEarnings = new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 0
  }).format(earnings);

  return (
    <div className="referral-card">
      <div className="referral-avatar">
        {name?.charAt(0).toUpperCase()}
      </div>

      <div className="referral-details">
        <div className="referral-name">{name}</div>
        <div className="referral-meta">
          <span className="referral-date">{date}</span>
          <span className={`referral-status ${status.toLowerCase()}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
      </div>

      <div className="referral-earnings">
        + {formattedEarnings}
      </div>
    </div>
  );
};

export default ReferralCard;
