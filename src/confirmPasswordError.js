/* eslint-disable */

const showErrorConfirm = function () {
  const confirmPassword = document.getElementById("confirm-password-form");
  const confirmPasswordError = document.querySelector(
    "#confirm-password-form + span.confirm-password-error",
  );
  if (confirmPassword.validity.valueMissing) {
    confirmPasswordError.textContent = "You need to enter a password.";
  } else if (confirmPassword.validity.tooShort) {
    confirmPasswordError.textContent = `Password should be at least ${confirmPassword.minLength} characters
      ; you entered ${confirmPassword.value.length}`;
  }
  confirmPasswordError.className === "error active";
};

export { showErrorConfirm };
