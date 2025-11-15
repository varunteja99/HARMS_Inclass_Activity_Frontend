import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import './PatientDashboard.css';

const PatientDashboard = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState({
    upcomingAppointments: 3,
    medicalRecords: 12,
    unreadMessages: 2
  });

  const [profileInfo, setProfileInfo] = useState({
    name: user?.full_name || 'John Doe',
    email: user?.email || 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    insurance: 'Blue Cross Blue Shield'
  });

  const [nextAppointment, setNextAppointment] = useState({
    doctor: 'Dr. Sarah Johnson',
    date: 'March 15, 2024',
    time: '2:00 PM',
    type: 'Regular Checkup'
  });

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'Appointment Reminder',
      message: 'Your appointment with Dr. Johnson is tomorrow at 2:00 PM.'
    },
    {
      id: 2,
      type: 'Test Results',
      message: 'Your blood test results are now available.'
    }
  ]);

  return (
    <div className="patient-dashboard-page">
      <Navigation onLogout={onLogout} user={user} />

      <div className="dashboard-container">
        <div className="dashboard-header">
          <h2 className="dashboard-title">👤 Patient Dashboard</h2>
          <p className="dashboard-subtitle">Welcome back, {profileInfo.name}</p>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">{dashboardData.upcomingAppointments}</div>
            <div className="stat-label">Upcoming Appointments</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{dashboardData.medicalRecords}</div>
            <div className="stat-label">Medical Records</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{dashboardData.unreadMessages}</div>
            <div className="stat-label">Unread Messages</div>
          </div>
        </div>

        <div className="dashboard-content">
          {/* Profile Information */}
          <div className="dashboard-card">
            <h3 className="card-title">📋 Profile Information</h3>
            <div className="profile-details">
              <div className="profile-item">
                <span className="profile-label">Name:</span>
                <span className="profile-value">{profileInfo.name}</span>
              </div>
              <div className="profile-item">
                <span className="profile-label">Email:</span>
                <span className="profile-value">{profileInfo.email}</span>
              </div>
              <div className="profile-item">
                <span className="profile-label">Phone:</span>
                <span className="profile-value">{profileInfo.phone}</span>
              </div>
              <div className="profile-item">
                <span className="profile-label">Insurance:</span>
                <span className="profile-value">{profileInfo.insurance}</span>
              </div>
            </div>
            <button className="btn btn-primary" style={{ marginTop: '16px' }}>
              Edit Profile
            </button>
          </div>

          {/* Next Appointment */}
          <div className="dashboard-card">
            <h3 className="card-title">🗓️ Next Appointment</h3>
            <div className="appointment-details">
              <div className="appointment-item">
                <span className="appointment-label">Doctor:</span>
                <span className="appointment-value">{nextAppointment.doctor}</span>
              </div>
              <div className="appointment-item">
                <span className="appointment-label">Date:</span>
                <span className="appointment-value">{nextAppointment.date} at {nextAppointment.time}</span>
              </div>
              <div className="appointment-item">
                <span className="appointment-label">Type:</span>
                <span className="appointment-value">{nextAppointment.type}</span>
              </div>
            </div>
            <button
              className="btn btn-primary"
              style={{ marginTop: '16px' }}
              onClick={() => navigate('/manage-appointments')}
            >
              View Details
            </button>
          </div>
        </div>

        {/* Recent Notifications */}
        <div className="dashboard-card full-width">
          <h3 className="card-title">🔔 Recent Notifications</h3>
          <div className="notifications-list">
            {notifications.map(notification => (
              <div key={notification.id} className="notification-item">
                <div className="notification-type">{notification.type}:</div>
                <div className="notification-message">{notification.message}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
