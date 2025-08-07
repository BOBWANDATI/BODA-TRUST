import React, { useState } from 'react';
import Button from './Button';
import './WalletView.css';

const WalletView = () => {
  const [activeTab, setActiveTab] = useState('balance');
  const [amount, setAmount] = useState('');

  const walletData = {
    balance: 45000,
    transactions: [
      {
        id: 1,
        type: 'credit',
        amount: 10000,
        description: 'Mobile Money Deposit',
        date: '2024-02-10',
        status: 'completed'
      },
      {
        id: 2,
        type: 'debit',
        amount: 8000,
        description: 'Ride Payment',
        date: '2024-02-08',
        status: 'completed'
      },
      {
        id: 3,
        type: 'credit',
        amount: 5000,
        description: 'Referral Reward',
        date: '2024-02-05',
        status: 'completed'
      },
      {
        id: 4,
        type: 'debit',
        amount: 12000,
        description: 'Ride Payment',
        date: '2024-02-03',
        status: 'completed'
      },
      {
        id: 5,
        type: 'credit',
        amount: 20000,
        description: 'Bank Transfer',
        date: '2024-01-28',
        status: 'completed'
      }
    ],
    paymentMethods: [
      {
        id: 1,
        type: 'mobile',
        details: 'MTN Mobile Money (**** 1234)',
        isPrimary: true
      },
      {
        id: 2,
        type: 'card',
        details: 'Visa Card (**** 5678)',
        isPrimary: false
      }
    ]
  };

  const handleAddMoney = (e) => {
    e.preventDefault();
    if (amount && !isNaN(amount)) {
      console.log('Adding money:', amount);
      setAmount('');
    }
  };

  return (
    <div className="wallet-view">
      <div className="wallet-tabs">
        <button
          className={`tab-btn ${activeTab === 'balance' ? 'active' : ''}`}
          onClick={() => setActiveTab('balance')}
        >
          Wallet Balance
        </button>
        <button
          className={`tab-btn ${activeTab === 'transactions' ? 'active' : ''}`}
          onClick={() => setActiveTab('transactions')}
        >
          Transactions
        </button>
        <button
          className={`tab-btn ${activeTab === 'methods' ? 'active' : ''}`}
          onClick={() => setActiveTab('methods')}
        >
          Payment Methods
        </button>
      </div>

      <div className="wallet-content">
        {activeTab === 'balance' && (
          <div className="balance-tab">
            <div className="balance-card">
              <div className="balance-amount">
                UGX {walletData.balance.toLocaleString()}
              </div>
              <div className="balance-label">Current Balance</div>
            </div>

            <form className="add-money-form" onSubmit={handleAddMoney}>
              <h3>Add Money to Wallet</h3>
              <div className="form-group">
                <label>Amount (UGX)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  min="1000"
                  step="1000"
                  required
                />
              </div>
              <div className="payment-options">
                <label className="payment-option">
                  <input type="radio" name="paymentMethod" defaultChecked />
                  <span>MTN Mobile Money</span>
                </label>
                <label className="payment-option">
                  <input type="radio" name="paymentMethod" />
                  <span>Airtel Money</span>
                </label>
                <label className="payment-option">
                  <input type="radio" name="paymentMethod" />
                  <span>Visa/Mastercard</span>
                </label>
              </div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="btn-full"
              >
                Add Money
              </Button>
            </form>
          </div>
        )}

        {activeTab === 'transactions' && (
          <div className="transactions-tab">
            <div className="transactions-list">
              {walletData.transactions.map((transaction) => (
                <div key={transaction.id} className="transaction-item">
                  <div className="transaction-icon">
                    {transaction.type === 'credit' ? '⬇️' : '⬆️'}
                  </div>
                  <div className="transaction-details">
                    <div className="transaction-description">
                      {transaction.description}
                    </div>
                    <div className="transaction-date">{transaction.date}</div>
                  </div>
                  <div
                    className={`transaction-amount ${
                      transaction.type === 'credit' ? 'credit' : 'debit'
                    }`}
                  >
                    {transaction.type === 'credit' ? '+' : '-'}
                    UGX {transaction.amount.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'methods' && (
          <div className="methods-tab">
            <div className="methods-list">
              {walletData.paymentMethods.map((method) => (
                <div key={method.id} className="method-item">
                  <div className="method-icon">
                    {method.type === 'mobile' ? '📱' : '💳'}
                  </div>
                  <div className="method-details">
                    <div className="method-description">{method.details}</div>
                    {method.isPrimary && (
                      <div className="method-status">Primary</div>
                    )}
                  </div>
                  <Button variant="ghost" size="sm">
                    {method.isPrimary ? '' : 'Remove'}
                  </Button>
                </div>
              ))}
            </div>

            <Button variant="outline" size="lg" className="btn-full">
              Add New Payment Method
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletView;