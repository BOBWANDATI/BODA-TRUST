import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Input from './Input';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
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
      console.log('Login data:', formData);
      // Handle successful login
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="login-brand">
            <Link to="/" className="brand-link">
              <div className="brand-icon">🏍️</div>
              <span className="brand-text">BodaTrust</span>
            </Link>
          </div>
          
          <div className="login-content">
            <h1 className="login-title">Welcome Back!</h1>
            <p className="login-subtitle">
              Sign in to access your account and continue your journey with BodaTrust.
            </p>
            
            <form className="login-form" onSubmit={handleSubmit}>
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
                type="password"
                name="password"
                placeholder="Enter your password"
                label="Password"
                value={formData.password}
                onChange={handleInputChange}
                error={!!errors.password}
                errorMessage={errors.password}
                icon="🔒"
                size="lg"
              />
              
              <div className="login-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <Link to="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
              </div>
              
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className={`btn-full ${isLoading ? 'btn-loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>
            
            <div className="login-divider">
              <span>or continue with</span>
            </div>
            
            <div className="social-login">
              <Button variant="outline" size="lg" className="social-btn">
                <span className="social-icon">📱</span>
                Phone Number
              </Button>
              <Button variant="outline" size="lg" className="social-btn">
                <span className="social-icon">🌐</span>
                Google
              </Button>
            </div>
            
            <p className="login-footer">
              Don't have an account?{' '}
              <Link to="/register" className="register-link">
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
        
        <div className="login-right">
          <div className="login-image">
            <div className="image-content">
              <h2>Join Uganda's Most Trusted Boda Network</h2>
              <div className="features-list">
                <div className="feature">
                  <span className="feature-icon">✅</span>
                  <span>Verified drivers with background checks</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✅</span>
                  <span>24/7 emergency assistance available</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✅</span>
                  <span>Real-time ride tracking for safety</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✅</span>
                  <span>Cashless payments and receipts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;