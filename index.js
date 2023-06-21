const passwordEl = document.getElementById("password-el");
const maxCharEl = document.getElementById("max-character-el");
const maxCharSliderEl = document.getElementById("max-character-slider-el");
const clipboardIconEl = document.getElementById("clipboard-icon");
const specialCharEl = document.getElementById("special-char-el");
const loadingEl = document.getElementById("loading-el");
const buttonText = document.getElementById("button-text");
const buttonEl = document.getElementById("button-el");
const specialCharTextarea = document.getElementById("special-char-textarea")

const checkIcon = document.getElementById("check-icon");
const hiddenIcon = document.getElementById("hidden-icon");
const visibleIcon = document.getElementById("visible-icon");

let numberOfCharacters = maxCharEl.value;
let useSpecialCharacters = specialCharEl.checked;
let normalCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let specialCharacters = specialCharTextarea.textContent;

function copyPass() {
  let changeIcon = () => {
    clipboardIconEl.classList.toggle("d-none");
    checkIcon.classList.toggle("d-none");
  };
  changeIcon();
  navigator.clipboard.writeText(passwordEl.value);
  setTimeout(changeIcon, 300);
}

function generatePass() {
  let password = "";
  let allowedCharacters = normalCharacters;

  if (useSpecialCharacters) {
    allowedCharacters += specialCharacters;
  }

  loadingEl.classList.toggle("d-none");
  buttonText.classList.toggle("d-none");
  buttonEl.setAttribute("disabled", "");
  passwordEl.value = "";

  setTimeout(() => {
    for (let i = 0; i < numberOfCharacters; i++) {
      let randomIndex = Math.floor(Math.random() * allowedCharacters.length);
      password += allowedCharacters.charAt(randomIndex);
    }

    passwordEl.value = password;
    loadingEl.classList.toggle("d-none");
    buttonText.classList.toggle("d-none");
    buttonEl.removeAttribute("disabled");
  }, 120);
}

function toggleVisibility() {
  let changeIcon = () => {
    hiddenIcon.classList.toggle("d-none");
    visibleIcon.classList.toggle("d-none");
  };

  if (passwordEl.getAttribute("type") === "text") {
    passwordEl.setAttribute("type", "password");
  } else {
    passwordEl.setAttribute("type", "text");
  }

  setTimeout(changeIcon, 120);
}

function changeLimit() {
  maxCharEl.value = maxCharSliderEl.value;
  numberOfCharacters = maxCharSliderEl.value;
}

function changeLimitText() {
  if (maxCharEl.value > 30) {
    maxCharEl.value = 30
  } else if (maxCharEl.value < 0) {
    maxCharEl.value = 0
  }
  
  maxCharSliderEl.value = maxCharEl.value
  numberOfCharacters = maxCharSliderEl.value;
}

function toggleSpecialCharacters() {
  useSpecialCharacters = specialCharEl.checked;
}

function changeSpecialChar() {
  specialCharacters = specialCharTextarea.value;
}
