//All input fields of interactions
const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const organization = document.getElementById("organization");

const userNameErrorList = document.getElementById("userNameErrorList");
const emailErrorList = document.getElementById("emailErrorList");
const phoneErrorList = document.getElementById("phoneErrorList");
const passwordErrorList = document.getElementById("passwordErrorList");
const password2ErrorList = document.getElementById("password2ErrorList");
const organizationErrorList = document.getElementById("organizationErrorList");

const fees = document.getElementById("fees");
const discount = document.getElementById("discount");

// Event Listener for form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputValidation();
});

//input validation function
const inputValidation = () => {
  userNameErrorList.innerHTML = "";
  fees.innerHTML = "";

  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const organizationValue = organization.value.trim();
  const discountValue = discount.value.trim();

  if (userNameValue === "") {
    errorAppend(userNameErrorList, "Missing FullName");
    userName.className = "form-control error";
  } else {
    userName.className = "form-control success";
  }

  if (!isEmailValid(emailValue) || emailValue === "") {
    errorAppend(emailErrorList, "Invalid or missing email address");
    email.className = "form-control error";
  } else {
    email.className = "form-control success";
  }

  let isPassError = false;

  if (passwordValue.length < 10 || passwordValue.length > 20) {
    errorAppend(
      passwordErrorList,
      "Password must be between 10 and 20 characters"
    );
    isPassError = true;
  }
  if (!hasLowerCase(passwordValue)) {
    errorAppend(
      passwordErrorList,
      "Password must contain at least one lowercase character"
    );
    isPassError = true;
  }
  if (!hasUpperCase(passwordValue)) {
    errorAppend(
      passwordErrorList,
      "Password must contain at least one uppercase character"
    );
    isPassError = true;
  }
  if (!hasNumber(passwordValue)) {
    errorAppend(passwordErrorList, "Password must contain at least one digit");
    isPassError = true;
  }
  if (isPassError) {
    password.className = "form-control error";
  } else {
    password.className = "form-control success";
  }

  if (password2Value !== passwordValue) {
    errorAppend(
      password2ErrorList,
      "Password and confirmation password don’t match"
    );
    password2.className = "form-control error";
  } else if (password2Value.length > 0) {
    password2.className = "form-control success";
  }

  if (organizationValue === "") {
    errorAppend(organizationErrorList, "Missing attendee organization");
    organization.className = "form-control error";
  } else {
    organization.className = "form-control success";
  }

  if (!isPhoneValid(phoneValue)) {
    errorAppend(phoneErrorList, "Wrong phone number provide");
    phone.className = "form-control error";
  } else {
    phone.className = "form-control success";
  }

  const selected = document.querySelector('input[type="radio"]:checked')?.value;
  let regFee = 0;
  if (selected === "author") {
    regFee = 400;
  } else if (selected === "participant") {
    regFee = 300;
  } else if (selected === "student") {
    regFee = 100;
  }

  if (discountValue === "Lehman College") {
    regFee = regFee / 2;
  }

  const h4 = document.createElement("h4");
  h4.innerText = `Your fees is ${regFee}`;
  h4.className = "mt-3 light-title blue";
  fees.appendChild(h4);
};

const errorAppend = (place, msg) => {
  const error = document.createElement("li");
  error.innerText = msg;
  place.appendChild(error);
};

const isEmailValid = (emailValue) => {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/.test(emailValue);
};

const hasLowerCase = (pass) => {
  return /[a-z]/.test(pass);
};

const hasUpperCase = (pass) => {
  return /[A-Z]/.test(pass);
};
const hasNumber = (pass) => {
  return /\d/.test;
};

const isPhoneValid = (phone) => {
  return /^(?:\(\d{3}\)|\d{3}-)\d{3}-\d{4}$/.test(phone);
};
