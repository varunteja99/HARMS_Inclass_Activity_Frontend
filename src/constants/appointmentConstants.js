// Appointment related constants

export const APPOINTMENT_STATUS = {
  CONFIRMED: 'Confirmed',
  PENDING: 'Pending',
  SCHEDULED: 'Scheduled',
  CANCELLED: 'Cancelled',
  COMPLETED: 'Completed'
};

export const SPECIALTIES = [
  'General Medicine',
  'Cardiology',
  'Dermatology',
  'Orthopedics',
  'Pediatrics',
  'Neurology',
  'Oncology',
  'Psychiatry'
];

export const DOCTORS = [
  { id: 1, name: 'Dr. Sarah Johnson', specialty: 'General Medicine' },
  { id: 2, name: 'Dr. Michael Brown', specialty: 'Cardiology' },
  { id: 3, name: 'Dr. Emily Davis', specialty: 'Dermatology' },
  { id: 4, name: 'Dr. Robert Wilson', specialty: 'Orthopedics' },
  { id: 5, name: 'Dr. Jennifer Lee', specialty: 'Pediatrics' },
  { id: 6, name: 'Dr. David Martinez', specialty: 'Neurology' }
];

export const TIME_SLOTS = [
  '9:00 AM',
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM',
  '4:00 PM',
  '4:30 PM'
];

export const APPOINTMENT_TYPES = [
  'Regular Checkup',
  'Follow-up Visit',
  'Consultation',
  'Emergency',
  'Routine Screening'
];
