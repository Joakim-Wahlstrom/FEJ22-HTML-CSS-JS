// LOOPAR

const namesArray = ['Joakim', 'Jeanette', 'Hans', 'John', 'Tommy', 'Nisse', 'Jack'];

const usersArray = [
  { name: 'Joakim', email: 'joakim@mail.com', age: 35, status: false },
  { name: 'Jeanette', email: 'jeanette@mail.com', age: 34, status: false },
  { name: 'Hans', email: 'hans@mail.com', age: 38, status: false },
  { name: 'John', email: 'john@mail.com', age: 85, status: false },
  { name: 'Tommy', email: 'tommy@mail.com', age: 39, status: false },
  { name: 'Jack', email: 'jack@mail.com', age: 6, status: false },
]


// console.log(namesArray[1])


// loopar ett givet antal gånger
// for (let i = 0; i < 5; i++) {
//   console.log(i)
//   console.log(namesArray[i])
// }


// loopar igenom en hel array
// for (let i = 0; i < namesArray.length; i++) {
//   console.log(i + ' - ' + namesArray[i])
// }



// FOR OF loop - loopa igenom en hel array

// for (let name of namesArray) {
//   console.log(name)
// }

// for (let user of usersArray) {
//   console.log(user.name)
// }

// for(let prop in usersArray[0]) {
//   console.log(`${prop}: ${usersArray[0][prop]}`)
// }



// WHILE loopar

let i = 15;

while (i < 5) {
  // console.log('while: ' + i)
  i++;
}

// console.log('i är ' + i)


// Do while körs alltid minst 1 gång
do {
  // console.log('do while: ' + i)
  i++;
} while(i < 7);

// console.log('i är ' + i)
