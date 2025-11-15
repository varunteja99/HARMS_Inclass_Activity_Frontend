import { useState } from 'react';
import Navigation from '../components/Navigation';
import './MedicalRecords.css';

const MedicalRecords = ({ user, onLogout }) => {
  const [labResults, setLabResults] = useState({
    date: 'March 10, 2024',
    test: 'Complete Blood Count',
    status: 'Normal ranges'
  });

  const [medications, setMedications] = useState([
    'Lisinopril 10mg - Once daily',
    'Metformin 500mg - Twice daily',
    'Vitamin D 1000IU - Once daily'
  ]);

  const [medicalHistory, setMedicalHistory] = useState([
    {
      id: 1,
      date: 'Mar 1, 2024',
      doctor: 'Dr. Sarah Johnson',
      visitType: 'Annual Checkup',
      diagnosis: 'Hypertension, controlled',
      action: 'View Report'
    },
    {
      id: 2,
      date: 'Dec 15, 2023',
      doctor: 'Dr. Michael Brown',
      visitType: 'Cardiology Consultation',
      diagnosis: 'Normal EKG',
      action: 'View Report'
    }
  ]);

  const handleViewReport = (recordId) => {
    alert(`Viewing report for record ${recordId}`);
  };

  return (
    <div className="medical-records-page">
      <Navigation onLogout={onLogout} user={user} />

      <div className="records-container">
        <div className="records-header">
          <h2 className="records-title">📄 Medical Records</h2>
          <p className="records-subtitle">Access your complete medical history</p>
        </div>

        <div className="records-content">
          {/* Lab Results Section */}
          <div className="records-card">
            <h3 className="section-title">🧪 Recent Lab Results</h3>
            <div className="lab-info">
              <div className="info-item">
                <span className="info-label">Date:</span>
                <span className="info-value">{labResults.date}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Test:</span>
                <span className="info-value">{labResults.test}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Status:</span>
                <span className="info-value status-normal">{labResults.status}</span>
              </div>
            </div>
            <button className="btn btn-primary mt-3">View Details</button>
          </div>

          {/* Current Medications Section */}
          <div className="records-card">
            <h3 className="section-title">💊 Current Medications</h3>
            <div className="medications-list">
              {medications.map((med, index) => (
                <div key={index} className="medication-item">
                  • {med}
                </div>
              ))}
            </div>
            <button className="btn btn-primary mt-3">Manage Medications</button>
          </div>
        </div>

        {/* Medical History Table */}
        <div className="history-section">
          <h3 className="section-title">📋 Medical History</h3>
          <div className="history-table-wrapper">
            <table className="history-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Doctor</th>
                  <th>Visit Type</th>
                  <th>Diagnosis</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {medicalHistory.map(record => (
                  <tr key={record.id}>
                    <td>{record.date}</td>
                    <td>{record.doctor}</td>
                    <td>{record.visitType}</td>
                    <td>{record.diagnosis}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-info"
                        onClick={() => handleViewReport(record.id)}
                      >
                        {record.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecords;
