// Validation utility functions

export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (re.test(email)) {
    return true;
  } else {
    return false;
  }
}

export function validatePhone(phone) {
  const re = /^\+?1?\s*\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  if (re.test(phone)) {
    return true;
  } else {
    return false;
  }
}

export function validatePassword(password) {
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
}

export function validateDate(date) {
  const d = new Date(date);
  if (!isNaN(d.getTime())) {
    return true;
  } else {
    return false;
  }
}

export function validateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
