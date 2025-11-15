import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import './LoginRegister.css';

const LoginRegister = ({ onLogin }) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    userType: 'Patient'
  });

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    // Mock login for prototype
    const userData = {
      id: 1,
      patient_id: 'PAT-1001',
      full_name: 'John Doe',
      email: loginData.email,
      user_type: 'patient'
    };

    onLogin(userData);
    navigate('/dashboard');
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    // Mock registration for prototype
    const userData = {
      id: 1,
      patient_id: 'PAT-' + Math.floor(Math.random() * 10000),
      full_name: registerData.fullName,
      email: registerData.email,
      user_type: registerData.userType.toLowerCase()
    };

    onLogin(userData);
    navigate('/dashboard');
  };

  return (
    <div className="login-register-page">
      <Navigation />

      <div className="auth-container">
        <div className="auth-header">
          <h2 className="auth-title">🔐 Login / Register</h2>
          <p className="auth-subtitle">Secure access to your healthcare portal</p>
        </div>

        <div className="auth-forms">
          {/* Login Form */}
          <div className="auth-form-section">
            <h3 className="form-section-title">Login</h3>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label htmlFor="login-email">Email Address</label>
                <input
                  type="email"
                  id="login-email"
                  name="email"
                  className="form-control"
                  placeholder="your.email@example.com"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="login-password">Password</label>
                <input
                  type="password"
                  id="login-password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
              </div>

              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={loginData.rememberMe}
                    onChange={handleLoginChange}
                  />
                  <span>Remember me</span>
                </label>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>

              <div className="form-footer">
                <a href="#" className="forgot-link">Forgot Password?</a>
              </div>
            </form>
          </div>

          {/* Register Form */}
          <div className="auth-form-section">
            <h3 className="form-section-title">Register</h3>
            <form onSubmit={handleRegisterSubmit}>
              <div className="form-group">
                <label htmlFor="register-name">Full Name</label>
                <input
                  type="text"
                  id="register-name"
                  name="fullName"
                  className="form-control"
                  placeholder="John Doe"
                  value={registerData.fullName}
                  onChange={handleRegisterChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="register-email">Email Address</label>
                <input
                  type="email"
                  id="register-email"
                  name="email"
                  className="form-control"
                  placeholder="john.doe@example.com"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="register-phone">Phone Number</label>
                <input
                  type="tel"
                  id="register-phone"
                  name="phoneNumber"
                  className="form-control"
                  placeholder="+1 (555) 123-4567"
                  value={registerData.phoneNumber}
                  onChange={handleRegisterChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="register-dob">Date of Birth</label>
                <input
                  type="date"
                  id="register-dob"
                  name="dateOfBirth"
                  className="form-control"
                  value={registerData.dateOfBirth}
                  onChange={handleRegisterChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="register-usertype">User Type</label>
                <select
                  id="register-usertype"
                  name="userType"
                  className="form-control"
                  value={registerData.userType}
                  onChange={handleRegisterChange}
                  required
                >
                  <option value="Patient">Patient</option>
                  <option value="Doctor">Doctor</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
