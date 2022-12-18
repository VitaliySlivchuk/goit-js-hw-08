import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const FEEDBACK = 'feedback-form-state';

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onSetDataonLocalStorage, 500));

let formData = {};

function onSetDataonLocalStorage(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK, JSON.stringify(formData));
}

if (localStorage.getItem(FEEDBACK)) {
  formData = JSON.parse(localStorage.getItem(FEEDBACK));
  for (let key in formData) {
    formEl.elements[key].value = formData[key];
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.clear();
  console.log(formData);
}
