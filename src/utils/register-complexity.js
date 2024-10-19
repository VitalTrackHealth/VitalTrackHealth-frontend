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
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValidEmail = emailRegex.test(email);

  if (!isValidEmail) {
    return false;
  }

  return true;
};
