const form = document.querySelector('#regForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const tac = document.querySelector('#tac');

const validateText = (input) => {
  if(input.value.trim() === '') {
    // set error
    setError(input, 'Name can\'t be empty')
    return false
  }
  else if(input.value.trim().length < 2) {
    //set error
    setError(input, 'Name must be atleast 2 chars long')
    return false
  }
  else {
    //set success
    setSuccess(input)
    return true
  }
}

const validateEmail = email => {
  let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if(email.value.trim() === '') {
    setError(email, 'You need to enter a email address')
    return false
  }
  else if (!regEx.test(email.value)) {
    setError(email, 'Email address is not valid')
    return false
  }
  else {
    setSuccess(email)
    return true
  }
}

const validatePassword = input => {
  
  if(input.value.trim() === '') {
    setError(input, 'Password can\'t be empty')
    return false
  }
  else if(input.value.trim().length < 5) {
    setError(input, 'Password must be atleast 5 chars long')
    return false
  }
  else if(!/\d/.test(input.value)) {
    setError(input, 'Password must contain atleast one number')
    return false
  }
  else {
    setSuccess(input)
    return true
  }
}

const samePassword = (password, repeatPassword) =>  {
  if(repeatPassword.value.trim() === '') {
    setError(repeatPassword, 'Password can\'t be empty')
    return false
  }
  else if(password.value.trim() !== repeatPassword.value.trim()) {
    setError(repeatPassword, 'Passwords must match')
    return false
  }
  else {
    setSuccess(repeatPassword)
    return true
  }
}

const validateCheck = checkbox => {
  if(!checkbox.checked) {
    setError(checkbox, 'You must accept the terms')
    return false
  }
  else {
    setSuccess(checkbox)
    return true
  }
}


const setError = (input, textMessage) => {
  const parent = input.parentElement;
  parent.classList.add('is-invalid');
  parent.classList.remove('is-valid');

  parent.querySelector('.invalid-input').innerText = textMessage
}

const setSuccess = input => {
  const parent = input.parentElement;
  parent.classList.remove('is-invalid');
  parent.classList.add('is-valid');
}

form.addEventListener('submit', e => {
  e.preventDefault();

  if(validateText(firstName) &&
  validateText(lastName) &&
  validateEmail(email) &&
  validatePassword(password) &&
  samePassword(password, password2) &&
  validateCheck(tac)) {
    alert('yaay')
  }



})