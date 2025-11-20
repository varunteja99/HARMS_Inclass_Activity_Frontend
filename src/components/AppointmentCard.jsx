import React from 'react';
import './AppointmentCard.css';

const AppointmentCard = ({ appointment, onReschedule, onCancel }) => {
  const getStatusColor = (status) => {
    if (status === 'Confirmed') {
      return 'green';
    } else if (status === 'Pending') {
      return 'orange';
    } else if (status === 'Scheduled') {
      return 'blue';
    } else if (status === 'Cancelled') {
      return 'red';
    } else {
      return 'gray';
    }
  };

  const getStatusIcon = (status) => {
    if (status === 'Confirmed') {
      return '✓';
    } else if (status === 'Pending') {
      return '⏳';
    } else if (status === 'Scheduled') {
      return '📅';
    } else if (status === 'Cancelled') {
      return '❌';
    } else {
      return '?';
    }
  };

  return (
    <div className="appointment-card">
      <div className="appointment-card-header">
        <h4>{appointment.doctor}</h4>
        <span
          className="status-badge"
          style={{ backgroundColor: getStatusColor(appointment.status) }}
        >
          {getStatusIcon(appointment.status)} {appointment.status}
        </span>
      </div>
      <div className="appointment-card-body">
        <p><strong>Date:</strong> {appointment.date}</p>
        <p><strong>Time:</strong> {appointment.time}</p>
        <p><strong>Specialty:</strong> {appointment.specialty}</p>
        {appointment.reason && <p><strong>Reason:</strong> {appointment.reason}</p>}
      </div>
      <div className="appointment-card-footer">
        {appointment.status !== 'Cancelled' && (
          <>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => onReschedule(appointment.id)}
            >
              Reschedule
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => onCancel(appointment.id)}
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;
