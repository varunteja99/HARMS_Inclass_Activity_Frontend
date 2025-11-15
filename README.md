# HARMS Frontend - Healthcare Appointment and Record Management System

Frontend application for the Healthcare Appointment and Record Management System built with React and Vite.

## Implemented Use Cases

This prototype implements 5 key use cases:

1. **UC01: Login/Register** - User authentication and registration
2. **UC02: Patient Dashboard** - Patient overview with profile and notifications
3. **UC03: Book Appointment** - Schedule new appointments with doctors
4. **UC04: Manage Appointments** - View, reschedule, or cancel appointments
5. **UC05: View Medical Records** - Access medical history and lab results

## Technology Stack

- **React 18.2.0** - UI framework
- **React Router DOM 6.20.0** - Client-side routing
- **Vite 5.0.8** - Build tool and dev server
- **Axios 1.6.2** - HTTP client for API calls

## Setup Instructions

### Option 1: Docker Setup (Recommended)

The easiest way to run the frontend is using Docker:

**Prerequisites:**
- Docker and Docker Compose installed
- Backend API running (see QUICK_START.md)

**Quick Start:**
```bash
# Start development server
docker-compose up frontend-dev
```

The app will be available at http://localhost:3000

For detailed Docker instructions, see [DOCKER_GUIDE.md](DOCKER_GUIDE.md)

### Option 2: Local Setup

**Prerequisites:**
- Node.js 18+ and npm installed
- Backend API running at http://localhost:8000

**Installation:**

1. Clone the repository:
```bash
cd HARMS_Inclass_Activity_Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.jsx   # Main navigation bar
│   └── Navigation.css
├── pages/              # Page components
│   ├── LoginRegister.jsx        # UC01: Authentication
│   ├── PatientDashboard.jsx     # UC02: Dashboard
│   ├── BookAppointment.jsx      # UC03: Book appointments
│   ├── ManageAppointments.jsx   # UC04: Manage appointments
│   └── MedicalRecords.jsx       # UC05: View medical records
├── App.jsx             # Main app component with routing
├── App.css             # Global app styles
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## Features

### UC01: Login/Register
- User login with email and password
- New user registration
- User type selection (Patient/Doctor)
- Remember me functionality

### UC02: Patient Dashboard
- Overview cards (appointments, records, messages)
- Profile information display
- Next appointment details
- Recent notifications

### UC03: Book Appointment
- Specialty selection
- Doctor selection
- Date picker
- Available time slots
- Reason for visit entry

### UC04: Manage Appointments
- View all appointments in a table
- Appointment status badges (Confirmed, Pending, Scheduled)
- Reschedule functionality
- Cancel appointments

### UC05: View Medical Records
- Recent lab results
- Current medications list
- Medical history table
- View detailed reports

## API Integration

The frontend connects to the backend API at `http://localhost:8000/api/`. Key endpoints:

- `POST /api/patients/register/` - Patient registration
- `GET /api/patients/{id}/appointments/` - Get patient appointments
- `POST /api/appointments/` - Book new appointment
- `GET /api/patients/{id}/medical_records/` - Get medical records

## Screenshots

Take screenshots of the following pages for submission:

1. Login/Register page
2. Patient Dashboard
3. Book Appointment form
4. Manage Appointments table
5. Medical Records view

## Development Notes

- The app uses mock data for the prototype
- Backend API integration points are prepared but using mock responses
- All navigation links are functional
- Form validations are in place

## For Submission

1. Start both backend and frontend servers
2. Navigate through all 5 use cases
3. Capture screenshots for each page
4. Document the use case with the corresponding screenshot

## License

This project is for educational purposes as part of ACS 560 Software Engineering course.
