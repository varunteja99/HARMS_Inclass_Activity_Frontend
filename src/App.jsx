import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LoginRegister from './pages/LoginRegister';
import PatientDashboard from './pages/PatientDashboard';
import BookAppointment from './pages/BookAppointment';
import ManageAppointments from './pages/ManageAppointments';
import MedicalRecords from './pages/MedicalRecords';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState('patient');
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    setUserType(userData.user_type || 'patient');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={<LoginRegister onLogin={handleLogin} />}
          />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <PatientDashboard user={user} onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/book-appointment"
            element={
              isAuthenticated ? (
                <BookAppointment user={user} onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/manage-appointments"
            element={
              isAuthenticated ? (
                <ManageAppointments user={user} onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/medical-records"
            element={
              isAuthenticated ? (
                <MedicalRecords user={user} onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
