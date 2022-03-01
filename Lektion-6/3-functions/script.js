// SCOPE

// let age = 35; // global scope
// // age = 50
// if(true) {
//   let age = 50 // local scope
//   let name = 'Joakim'
//   console.log('inne i 1a kodblocket', age);
//   console.log('inne i 1a kodblocket', name);

//   if(true) {
//     let age = 100
//     console.log('inne i kodblock 1.2', age, name);
//     var globalt = 'var'
//   }

// }

// if(true) {
//   let age = 66
//   let name = 'Hans'
//   console.log('inne i 2a kodblocket', age);
//   console.log('inne i 2a kodblocket', name);
//   console.log('inne i 2a kodblocket', globalt);
// }


// console.log('utanför något block', age);
// console.log('utanför något block', name);
// console.log('utanför något block', globalt);



// FUNCTIONS


//deklarera en funktion

// function hej() {
//   console.log('hej på dig')
//   return 'hej på dig'
// }

// const greet = function() {
//   console.log('hur är läget?')
//   return 13
// }


// Köra en funtion
// console.log(hej());
// let nr = greet();

// console.log(nr)



let firstName = 'Joakim';


// const greet = function(name) {
//   console.log(`Hej ${name} hur är läget?`)
// }


// greet('Joakim')
// greet(firstName)
// greet('Hans')
// greet('John')


// const func1 = function(firstName, lastName) {
//   let fullName = `${firstName} ${lastName}`
//   return fullName.trim()
// }

// // console.log(func1('             Joakim', 'Wahlström'))
// const fullName = func1(5, 'Mattin-Lassei')

// console.log(fullName)


const func2 = function(firstName = 'John', lastName = 'Doe') {
  if(typeof firstName != 'string') {
    return;
  }

  let fullName = `${firstName} ${lastName}`
  console.log(fullName)
  return fullName
}

// func2()


// const calc = function(num1 = 0, num2 = 0) {
//   // if(typeof num1 != 'number' && typeof num1 != 'string' || typeof num2 != 'number' && typeof num2 != 'string') {
//   //   return 0
//   // }
//   let sum = +num1 + +num2
//   return sum
// }

// let sum = calc(10, 15);
// sum = calc();
// sum = calc('3', '10');
// sum = calc(10, 'hej');

// console.log(sum)



// ARROW FUNCTIONS

const greet = name => {
  // console.log(`Hej ${name} hur är läget?`)

}

greet('Joakim')

const calc = (num1 = 0, num2 = 0) => +num1 + +num2

// console.log(calc(10,5))

// CALLBACK FUNCTION

let names = ['Joakim', 'Hans', 'Tommy']

// names.forEach(name => {
//   console.log(name)
// })

// cb = callback
const minFunktion = (nr1, nr2, cb) => {
  setTimeout(() => {
    let sum = +nr1 + nr2

    cb(sum)
  }, 2000)
}


// minFunktion(5, 10, (data) => {
//   console.log(data)
// })


// METHODS
// en method är en funktion som är inbyggd i ett objekt

let myName = names[0];
// console.log(myName)

// det här är en metod
let upper = myName.toUpperCase()
// console.log(upper)


let user = {
  firstName: 'Joakim',
  lastName: 'Wahlström',
  fullName() {
    return this.firstName + ' ' + this.lastName
    // console.log(this)
  }
  // fullName: () => {
  //   console.log(this)
  // }
}


console.log(user.fullName())

