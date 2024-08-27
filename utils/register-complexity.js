export const passwordComplexity = (password) => {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < 8) {
    return false;
  }

  if (!hasUppercase) {
    return false;
  }

  if (!hasLowercase) {
    return false;
  }

  if (!hasNumber) {
    return false;
  }

  if (!hasSpecialCharacter) {
    return false;
  }

  return true;
};

export const emailComplexity = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(email);

  if (!isValidEmail) {
    return false;
  }

  return true;
};
