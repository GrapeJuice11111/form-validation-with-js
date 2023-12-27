/* eslint-disable */

const showErrorEmail = function () {
  const email = document.getElementById("email-form");
  const emailError = document.querySelector("#email-form + span.email-error");

  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter a email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters
    ; you entered ${email.value.length}`;
  }
  emailError.className = "error active";
};

export { showErrorEmail };
