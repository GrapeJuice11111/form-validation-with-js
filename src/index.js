/* eslint-disable */
import "./style.css";
import { showErrorEmail } from "./emailError.js";
import { showErrorPassword } from "./passwordError.js";

const form = document.querySelector("form");
const email = document.getElementById("email-form");
const emailError = document.querySelector("#email-form + span.email-error");
const password = document.getElementById("password-form");
const passwordError = document.querySelector(
  "#password-form + span.password-error",
);
const confirmPassword = document.getElementById("confirm-password-form");
const confirmPasswordError = document.querySelector(
  "#confirm-password-form + span.confirm-password-error",
);

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showErrorEmail();
  }
});

password.addEventListener("input", (event) => {
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
  } else {
    showErrorPassword();
  }
});

confirmPassword.addEventListener("input", (event) => {
  if (!(confirmPassword.value === password.value)) {
    confirmPasswordError.textContent = `The password and confirm password must match`;
    confirmPasswordError.className = "error active";
    showErrorPassword();
  } else if (confirmPassword.validity.valid) {
    confirmPasswordError = "";
    confirmPasswordError.className = "error";
  } else {
    showErrorPassword();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showErrorEmail();
    event.preventDefault();
  }
  if (!password.validity.valid) {
    showErrorPassword();
    event.preventDefault();
  }
});
