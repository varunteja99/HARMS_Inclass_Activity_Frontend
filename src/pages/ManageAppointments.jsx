import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import './ManageAppointments.css';

const ManageAppointments = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: 'Mar 15, 2024 - 2:00 PM',
      doctor: 'Dr. Sarah Johnson',
      specialty: 'General Medicine',
      status: 'Confirmed'
    },
    {
      id: 2,
      date: 'Mar 22, 2024 - 10:30 AM',
      doctor: 'Dr. Michael Brown',
      specialty: 'Cardiology',
      status: 'Pending'
    },

    {
      id: 3,
      date: 'Apr 5, 2024 - 3:30 PM',
      doctor: 'Dr. Emily Davis',
      specialty: 'Dermatology',
      status: 'Scheduled'
    }
  ]);

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'Confirmed':
        return 'badge-Success';
      case 'Pending':
        return 'badge-Warning';
      case 'Scheduled':
        return 'badge-Info';
      default:
        return '';
    }
  };
    

  const handleReschedule = (appointmentId) => {
    alert(`Reschedule appointment ${appointmentId}`);
  };

  const handleCancel = (appointmentId) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      setAppointments(prev => prev.filter(apt => apt.id !== appointmentId));
      alert('Appointment Cancelled Successfully');
    }
  };

  return (
    <div className="manage-appointments-page">
      <Navigation onLogout={onLogout} user={user} />

      <div className="manage-container">
        <div className="manage-header">
          <h2 className="manage-title">📋 Manage Appointments</h2>
          <p className="manage-subtitle">View, reschedule, or cancel your appointments</p>
        </div>

        <div className="appointments-table-wrapper">
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>Doctor</th>
                <th>Specialty</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(appointment => (
                <tr key={appointment.id}>
                  <td>{appointment.date}</td>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.specialty}</td>
                  <td>
                    <span className={`badge ${getStatusClass(appointment.status)}`}>
                      {appointment.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => handleReschedule(appointment.id)}
                      >
                        Reschedule
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleCancel(appointment.id)}
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {appointments.length === 0 && (
            <div className="no-appointments">
              <p>No appointments found.</p>
              <button
                className="btn btn-primary"
                onClick={() => navigate('/book-appointment')}
              >
                Book New Appointment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageAppointments;
