import { useState } from 'react';
import Navigation from '../components/Navigation';
import './Notifications.css';

const Notifications = ({ user, onLogout }) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'appointment',
      title: 'Appointment Reminder',
      message: 'Your appointment with Dr. Sarah Johnson is tomorrow at 2:00 PM',
      date: '2024-03-14',
      read: false,
      priority: 'high'
    },
    {
      id: 2,
      type: 'test_result',
      title: 'Test Results Available',
      message: 'Your blood test results are now available in your medical records',
      date: '2024-03-13',
      read: false,
      priority: 'medium'
    },
    {
      id: 3,
      type: 'prescription',
      title: 'Prescription Renewal',
      message: 'Your prescription for Lisinopril is due for renewal',
      date: '2024-03-12',
      read: true,
      priority: 'low'
    },
    {
      id: 4,
      type: 'billing',
      title: 'Payment Received',
      message: 'Your payment of $150.00 has been received',
      date: '2024-03-10',
      read: true,
      priority: 'low'
    }
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => {
      if (n.id === id) {
        return { ...n, read: true };
      } else {
        return n;
      }
    }));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => {
      return { ...n, read: true };
    }));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getNotificationIcon = (type) => {
    if (type === 'appointment') {
      return '📅';
    } else if (type === 'test_result') {
      return '🧪';
    } else if (type === 'prescription') {
      return '💊';
    } else if (type === 'billing') {
      return '💳';
    } else {
      return '📬';
    }
  };

  const getPriorityClass = (priority) => {
    if (priority === 'high') {
      return 'priority-high';
    } else if (priority === 'medium') {
      return 'priority-medium';
    } else if (priority === 'low') {
      return 'priority-low';
    } else {
      return '';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="notifications-page">
      <Navigation onLogout={onLogout} user={user} />

      <div className="notifications-container">
        <div className="notifications-header">
          <h2>🔔 Notifications</h2>
          <div className="header-actions">
            <span className="unread-badge">{unreadCount} Unread</span>
            {unreadCount > 0 && (
              <button className="btn btn-sm btn-primary" onClick={markAllAsRead}>
                Mark All as Read
              </button>
            )}
          </div>
        </div>

        <div className="notifications-list">
          {notifications.map(notification => (
            <div
              key={notification.id}
              className={`notification-item ${notification.read ? 'read' : 'unread'} ${getPriorityClass(notification.priority)}`}
            >
              <div className="notification-icon">
                {getNotificationIcon(notification.type)}
              </div>
              <div className="notification-content">
                <h4>{notification.title}</h4>
                <p>{notification.message}</p>
                <span className="notification-date">{notification.date}</span>
              </div>
              <div className="notification-actions">
                {!notification.read && (
                  <button
                    className="btn btn-sm btn-outline"
                    onClick={() => markAsRead(notification.id)}
                  >
                    Mark Read
                  </button>
                )}
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteNotification(notification.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {notifications.length === 0 && (
            <div className="no-notifications">
              <p>No notifications at this time</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
