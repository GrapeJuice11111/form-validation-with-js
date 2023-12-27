/* eslint-disable */

const showErrorPassword = function () {
  const password = document.getElementById("password-form");
  const passwordError = document.querySelector(
    "#password-form + span.password-error",
  );
  if (password.validity.valueMissing) {
    passwordError.textContent = "You need to enter a password.";
  } else if (password.validity.tooShort) {
    passwordError.textContent = `Password should be at least ${password.minLength} characters
    ; you entered ${password.value.length}`;
  }
  passwordError.className = "error active";
};

export { showErrorPassword };
