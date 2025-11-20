// Appointment Service - handles appointment-related API calls

class AppointmentService {
  constructor() {
    this.baseUrl = 'http://localhost:8000/api';
  }

  async getAppointments(patientId) {
    try {
      const response = await fetch(this.baseUrl + '/appointments/' + patientId);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error fetching appointments:', error);
      throw error;
    }
  }

  async createAppointment(appointmentData) {
    try {
      const response = await fetch(this.baseUrl + '/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error creating appointment:', error);
      throw error;
    }
  }

  async updateAppointment(appointmentId, appointmentData) {
    try {
      const response = await fetch(this.baseUrl + '/appointments/' + appointmentId, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error updating appointment:', error);
      throw error;
    }
  }

  async cancelAppointment(appointmentId) {
    try {
      const response = await fetch(this.baseUrl + '/appointments/' + appointmentId, {
        method: 'DELETE',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error cancelling appointment:', error);
      throw error;
    }
  }

  async getAvailableSlots(doctorId, date) {
    try {
      const response = await fetch(this.baseUrl + '/appointments/available-slots?doctorId=' + doctorId + '&date=' + date);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error fetching available slots:', error);
      throw error;
    }
  }
}

export default new AppointmentService();
