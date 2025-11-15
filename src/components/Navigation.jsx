import { Link, useNavigate } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ onLogout, user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate('/login');
  };

  return (
    <div className="nav-wrapper">
      <div className="nav-header">
        <h1 className="nav-title">
          <span className="nav-icon">🏥</span> Healthcare Management System
        </h1>
      </div>
      <nav className="navigation">
        <div className="nav-links">
          <Link to="/login" className="nav-button">Login/Register</Link>
          <Link to="/dashboard" className="nav-button">Patient Dashboard</Link>
          <Link to="/book-appointment" className="nav-button">Book Appointment</Link>
          <Link to="/manage-appointments" className="nav-button">Manage Appointments</Link>
          <Link to="/medical-records" className="nav-button">Medical Records</Link>
          <Link to="/doctor-dashboard" className="nav-button">Doctor Dashboard</Link>
          <Link to="/doctor-schedule" className="nav-button">Doctor Schedule</Link>
          <Link to="/patient-records" className="nav-button">Patient Records</Link>
          <Link to="/admin-dashboard" className="nav-button">Admin Dashboard</Link>
          <Link to="/notifications" className="nav-button">Notifications</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
