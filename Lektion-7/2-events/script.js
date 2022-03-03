const btn = document.querySelector('#btnAlert')
const square = document.querySelector('#square')
const loginForm = document.querySelector('#loginForm')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')

const function1 = () => {
  console.log('funktionen kördes')
}

// btn.addEventListener('click', () => {
//   console.log('eventet kördes')
// })

// btn.removeEventListener('click', () => {
//   console.log('eventet kördes')
// })

// btn.addEventListener('click', function1)
// btn.removeEventListener('click', function1)


// btn.addEventListener('click', () => {
//   console.log('klickade på knappen')
// })
// btn.addEventListener('click', () => {
//   console.log('klickade på knappen')
// })
// btn.addEventListener('click', () => {
//   console.log('klickade på knappen')
// })
// btn.addEventListener('click', () => {
//   console.log('klickade på knappen')
// })
// btn.addEventListener('click', () => {
//   console.log('klickade på knappen')
// })
// btn.addEventListener('dblclick', () => {
//   console.log('dubbelklickade på knappen')
// })

// btn.addEventListener('mousedown', () => {
//   console.log('eventet kördes down')
// })
// btn.addEventListener('mouseup', () => {
//   console.log('eventet kördes up')
// })

// btn.addEventListener('mouseenter', () => {
//   console.log('enter')
// })
// btn.addEventListener('mouseleave', () => {
//   console.log('leave')
// })

// btn.addEventListener('mouseover', (event) => {
//   console.log(event)
//   console.log('over')
// })

square.addEventListener('mousemove', e => {
  // console.log(e.offsetX, e.offsetY)
  square.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 0)`
})


// firstName.addEventListener('keyup', e => {
//   console.log(e.key)
// })
// firstName.addEventListener('keydown', e => {
//   console.log(e.key)
// })

// firstName.addEventListener('focus', e => {
//   this.classList.add('focus-red')
// })
// firstName.addEventListener('focus', function(e) {
//   this.classList.add('focus-red')
// })

// firstName.addEventListener('blur', e => {
//   firstName.classList.remove('focus-red')
// })


// const addBorder = function(e) {
//   console.log(e)
//   this.classList.add('focus-red')
// }
// const addBorder2 = (e) => {
//   this.classList.add('focus-red')
// }

// firstName.addEventListener('focus', addBorder)
// lastName.addEventListener('focus', addBorder)


const test = function() {
  console.log(this)
}

const test2 = () => {
  console.log(this)
}

// firstName.addEventListener('focus', test2)
// btn.addEventListener('click', test2)


loginForm.addEventListener('submit', e => {
  e.preventDefault()
  if(firstName.value.trim() === '')
    return;

  console.log(firstName.value)
  console.log('validerar alla fält')
  console.log('validering klar! skickar till databasen')
  // if(firstName.value !== '') {
  //   console.log(firstName.value)
  //   console.log('validerar alla fält')
  //   console.log('validering klar! skickar till databasen')
  // }
})