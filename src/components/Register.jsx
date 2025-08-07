import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Input from './Input';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'Full name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Registration data:', formData);
      // Handle successful registration
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-left">
          <div className="register-brand">
            <Link to="/" className="brand-link">
              <div className="brand-icon">🏍️</div>
              <span className="brand-text">BodaTrust</span>
            </Link>
          </div>
          
          <div className="register-content">
            <h1 className="register-title">Create Your Account</h1>
            <p className="register-subtitle">
              Join Uganda's most trusted boda boda network today.
            </p>
            
            <form className="register-form" onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Enter your full name"
                label="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                error={!!errors.name}
                errorMessage={errors.name}
                icon="👤"
                size="lg"
              />
              
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                label="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                errorMessage={errors.email}
                icon="📧"
                size="lg"
              />
              
              <Input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                label="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                error={!!errors.phone}
                errorMessage={errors.phone}
                icon="📱"
                size="lg"
              />
              
              <Input
                type="password"
                name="password"
                placeholder="Create a password"
                label="Password"
                value={formData.password}
                onChange={handleInputChange}
                error={!!errors.password}
                errorMessage={errors.password}
                icon="🔒"
                size="lg"
              />
              
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                label="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                error={!!errors.confirmPassword}
                errorMessage={errors.confirmPassword}
                icon="🔒"
                size="lg"
              />
              
              <div className="register-terms">
                <label className="terms-checkbox">
                  <input type="checkbox" required />
                  <span>I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link></span>
                </label>
              </div>
              
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className={`btn-full ${isLoading ? 'btn-loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>
            
            <div className="register-divider">
              <span>or sign up with</span>
            </div>
            
            <div className="social-register">
              <Button variant="outline" size="lg" className="social-btn">
                <span className="social-icon">📱</span>
                Phone Number
              </Button>
              <Button variant="outline" size="lg" className="social-btn">
                <span className="social-icon">🌐</span>
                Google
              </Button>
            </div>
            
            <p className="register-footer">
              Already have an account?{' '}
              <Link to="/login" className="login-link">
                Sign in
              </Link>
            </p>
          </div>
        </div>
        
        <div className="register-right">
          <div className="register-image">
            <div className="image-content">
              <h2>Why Join BodaTrust?</h2>
              <div className="benefits-list">
                <div className="benefit">
                  <span className="benefit-icon">🛡️</span>
                  <div className="benefit-content">
                    <h3>Safe Rides</h3>
                    <p>Verified drivers with background checks for your safety</p>
                  </div>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">💰</span>
                  <div className="benefit-content">
                    <h3>Earn Rewards</h3>
                    <p>Get discounts and cashback on every ride</p>
                  </div>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">🚨</span>
                  <div className="benefit-content">
                    <h3>Emergency Help</h3>
                    <p>24/7 emergency assistance when you need it</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;