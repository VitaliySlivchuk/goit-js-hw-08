import { save, load, remove } from './storage';
const throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const messageInput = document.querySelector('.feedback-form textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

feedbackForm.addEventListener('submit', onFormSubmit);
emailInput.addEventListener('input', throttle(saveDataOnImput, 500));
messageInput.addEventListener('input', throttle(saveDataOnImput, 500));

updateInputs();

function saveDataOnImput() {
  const feedback = {
    email: emailInput.value,
    message: messageInput.value,
  };
  save(LOCALSTORAGE_KEY, feedback);
}

function onFormSubmit(e) {
  e.preventDefault();

  const email = emailInput.value;
  const message = messageInput.value;
  if (!email || !message) {
    alert('Fill all field please');
    return;
  }

  showFeedback();
  feedbackForm.reset();
  clearLocalStorage();
}

function showFeedback() {
  const feedback = load(LOCALSTORAGE_KEY);
  console.log(feedback);
}

function updateInputs() {
  const storageData = load(LOCALSTORAGE_KEY) || '';

  emailInput.value = storageData.email || '';
  messageInput.value = storageData.message || '';
}

function clearLocalStorage() {
  remove(LOCALSTORAGE_KEY);
}
