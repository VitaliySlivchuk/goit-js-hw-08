import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const text = document.querySelector('textarea');

const FEEDBACK = 'feedback-form-state';

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onSetDataonLocalStorage, 500));

let formData = {};

function onSetDataonLocalStorage(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK, JSON.stringify(formData));
}

if (localStorage.getItem(FEEDBACK)) {
  let getFormData = localStorage.getItem(FEEDBACK);
  let parseFormData = JSON.parse(getFormData);

  if (parseFormData) {
    input.value = parseFormData.email || '';
    text.value = parseFormData.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.clear();
  console.log(formData);
  formData = {};
}
