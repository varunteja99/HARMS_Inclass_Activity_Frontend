import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import './BookAppointment.css';

const BookAppointment = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    specialty: 'General Medicine',
    doctor: 'Dr. Sarah Johnson - General Medicine',
    preferredDate: '',
    selectedTime: '',
    reasonForVisit: ''
  });

  const specialties = [
    'General Medicine',
    'Cardiology',
    'Dermatology',
    'Orthopedics',
    'Pediatrics'
  ];

  const doctors = [
    'Dr. Sarah Johnson - General Medicine',
    'Dr. Michael Brown - Cardiology',
    'Dr. Emily Davis - Dermatology',
    'Dr. Robert Wilson - Orthopedics'
  ];

  const timeSlots = [
    '9:00 AM',
    '10:30 AM',
    '2:00 PM',
    '3:30 PM'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTimeSlotClick = (time) => {
    setFormData(prev => ({
      ...prev,
      selectedTime: time
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mock API call
    alert('Appointment booked successfully!');
    navigate('/manage-appointments');
  };

  const handleCancel = () => {
    navigate('/dashboard');
  };

  return (
    <div className="book-appointment-page">
      <Navigation onLogout={onLogout} user={user} />

      <div className="appointment-container">
        <div className="appointment-header">
          <h2 className="appointment-title">📅 Book New Appointment</h2>
          <p className="appointment-subtitle">Schedule your healthcare visit</p>
        </div>

        <div className="appointment-form-wrapper">
          <form onSubmit={handleSubmit} className="appointment-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="specialty">Select Specialty</label>
                <select
                  id="specialty"
                  name="specialty"
                  className="form-control"
                  value={formData.specialty}
                  onChange={handleChange}
                  required
                >
                  {specialties.map(specialty => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="doctor">Select Doctor</label>
                <select
                  id="doctor"
                  name="doctor"
                  className="form-control"
                  value={formData.doctor}
                  onChange={handleChange}
                  required
                >
                  {doctors.map(doctor => (
                    <option key={doctor} value={doctor}>
                      {doctor}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="preferredDate">Preferred Date</label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                className="form-control"
                value={formData.preferredDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Available Time Slots</label>
              <div className="time-slots">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    type="button"
                    className={`time-slot ${formData.selectedTime === time ? 'selected' : ''}`}
                    onClick={() => handleTimeSlotClick(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="reasonForVisit">Reason for Visit</label>
              <textarea
                id="reasonForVisit"
                name="reasonForVisit"
                className="form-control"
                rows="4"
                placeholder="Brief description of your symptoms or reason for visit"
                value={formData.reasonForVisit}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Book Appointment
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
