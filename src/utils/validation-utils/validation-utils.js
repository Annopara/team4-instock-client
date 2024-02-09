// VALIDATION UTILS
const isPhoneNumberValid = (phoneNumber) => {
  // Regular expression to validate phone number format: +XX (XXX) XXXX-XXXX
  return /^\d{1,2}\s\(\d{3}\)\s\d{1,4}-\d{1,4}$/.test(phoneNumber);
};

const isEmailValid = (email) => {
  // Regular expression to validate email format
  return /\S+@\S+\.\S+/.test(email);
};

export { isPhoneNumberValid, isEmailValid };
