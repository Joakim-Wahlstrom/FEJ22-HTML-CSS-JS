const regForm = document.querySelector('#regForm');
const email = document.querySelector('#email')
// const validateFirstName = () => {
//   const firstName = document.querySelector('#firstName');
//   const firstNameError = document.querySelector('#firstName-error');

//   if(firstName.value === '') {
//     firstNameError.innerText = 'Du måste ange ett namn'
//   }
//   else if (firstName.value.length < 2) {
//     firstNameError.innerText = 'Du måste ange minst 2 tecken'
//   }
//   else {
//     firstNameError.innerText = ''
//   }
// }

// const validateName = (id) => {
//   const input = document.querySelector(id);
//   const error = document.querySelector(id + '-error');

//   if(input.value === '') {
//     error.innerText = 'Du måste ange ett namn'
//   }
//   else if (input.value.length < 2) {
//     error.innerText = 'Du måste ange minst 2 tecken'
//   }
//   else {
//     error.innerText = ''
//   }
// }

const validateText = (id) => {
  const input = document.querySelector(id)

  if(input.value === '' || input.value.length < 2) {
    input.classList.remove('is-valid')
    input.classList.add('is-invalid')
    input.focus()
    return false
  }

  input.classList.add('is-valid')
  input.classList.remove('is-invalid')
  return true
  
}


const validateEmail = (emailInput) => {

  let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if(regEx.test(emailInput.value)) {
    emailInput.classList.add('is-valid')
    emailInput.classList.remove('is-invalid')
    return true
  } else {
    emailInput.classList.remove('is-valid')
    emailInput.classList.add('is-invalid')
    return false
  }

}


regForm.addEventListener('submit', e => {
  e.preventDefault()

  // let firstName = e.currentTarget[0].value
  // let lastName = e.currentTarget.lastName.value
  // let address = e.currentTarget['address'].value
  // let role = regForm.querySelector('#role').value

  // console.log(firstName, lastName, address, role)

  
  // if(!e.currentTarget.tac.checked) {
  //   // alert('You must accept the terms')
  //   console.log('You must accept the terms')
  //   return
  // }

  // validateFirstName()

  // validateName('#firstName')
  // validateName('#lastName')
  
  // let user = {
  //   firstName: e.currentTarget.firstName.value,
  //   lastName: e.currentTarget.lastName.value,
  //   address: e.currentTarget.address.value,
  //   role: e.currentTarget.role.value,
  // }

  // console.log(user)



  // validateText('#firstName')
  // validateText('#lastName')
  // validateEmail(email)


  // if(
  //   validateText('#firstName') &&
  //   validateText('#lastName') &&
  //   validateEmail(email)
  // ) {
  //   console.log('success')
  // }
  // else {
  //   console.log('nope, försök igen')
  // }


  const errors = [];

  for(let i = 0; i < e.currentTarget.length; i++) {
    if(e.currentTarget[i].type === 'text') {
      errors[i] = validateText('#' + e.currentTarget[i].id)
    }
    else if (e.currentTarget[i].type === 'email') {
      errors[i] = validateEmail(email)
    }
  }

  console.log(errors)

  if(errors.includes(false)) {
    console.log('inte bra')
    return
  }

  console.log('allt gick bra. skickar till databasen')
  
})