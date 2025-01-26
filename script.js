"use strict";

const customUpload = document.querySelector(".custom-upload");
const emailInput = document.querySelector("#email");
const fullName = document.querySelector("#fullname");
const cloudIcon = document.querySelector("#cloud");
const gitHub = document.querySelector("#github");
const button = document.querySelector("button");
const main = document.querySelector("main");
const ticket = document.querySelector("#ticket-container");
const ticketEmail = document.querySelector("#orange");
const userGradient = document.querySelector("#gradient");
const ticketName = document.querySelector("#name");
const ticketGit = document.querySelector("#email-git");
const emailError = document.querySelector("#email-error");
const uploadInfo = document.querySelector(".info-upload");
const uploadError = document.querySelector("#file-error");
const successAvatar = document.querySelector("#success-custom-upload");
const inputArr = [fullName, gitHub];
let checked = false;
let empty = false;

function checkEmail() {
  const emailError = document.querySelector("#email-error");
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  regex.test(emailInput.value) ? (checked = true) : showEmailError();
}

function emptyCheck(input) {
  if (input.value === "") {
    input.style.borderColor = "hsl(7, 88%, 67%)";
    empty = true;
  } else {
    input.style.borderColor = "hsl(245, 15%, 58%)";
    empty = false;
  }
}

function showUploadError() {
  uploadInfo.classList.add("hide");
  uploadError.classList.remove("hide");
}

function showEmailError() {
  if (emailInput.value === "" || checked === false) {
    emailError.classList.remove("hide");
    emailInput.style.borderColor = "hsl(7, 88%, 67%)";
  }
}

function showSuccess() {
  customUpload.classList.add("hide");
  successAvatar.classList.toggle("hide");
  uploadInfo.classList.toggle("hide");
  uploadError.classList.toggle("hide");
}

function showTicket() {
  main.classList.add("hide");
  ticket.classList.remove("hide");
  userGradient.textContent = `${fullName.value}`;
  ticketEmail.textContent = `${emailInput.value}`;
  ticketName.textContent = `${fullName.value}`;
  ticketGit.textContent = `${gitHub.value}`;
}

customUpload.addEventListener("mouseenter", (e) => {
  if ((uploadError.classList = "hide")) {
    showUploadError();
  }
});

cloudIcon.addEventListener("click", (e) => {
  showSuccess();
});

button.addEventListener("click", (e) => {
  e.preventDefault;
  checkEmail();

  inputArr.forEach(emptyCheck);
  if (checked === true && empty === false) {
    showTicket();
  }
});
