/* 
  ARRAYS - en lista med ett eller flera värden
  ----------------------------------------------------------------------------------------

  Vi vill hålla samma datatyp innuti en array
  const array = [0,1,2,3,4,5,6,7]

  Gör inte såhär
  const multiArray = ['12', 12, true, { firstName: 'Joakim' }, null]
*/

const users = [
  { firstName: 'Joakim', lastName: 'Wahlström', age: 35, isActive: true },
  { firstName: 'Jeanette', lastName: 'Wahlström', age: 33, isActive: false },
  { firstName: 'Hans', lastName: 'Mattin-Lassei', age: 38, isActive: false },
]

const names = ['Joakim', 'Jeanette', 'Hans'];

// console.log(names)
// console.log(names[1])

// Lägga till i början av en array
names.unshift('Colin')
// console.log('Med unshift: ' + names)

// Ta bort i början av en array
names.shift()
// console.log('Med shift: ' + names)

// Lägga till i slutet av en array
names.push('Colin')
// console.log('Med push: ' + names)

// Ta bort i slutet av en array
names.pop()
// console.log('Med pop: ' + names)

names[1] = 'Nytt namn'
// console.log('Ändrat: ' + names)

//Det här går inte
// names = ['Tommy', 'Annika']


// Hämtar ut vilken index plats någonting har
// ger -1 om det inte finns
const index = names.indexOf('Nytt namn')
// console.log(index)

// names[index]
names[names.indexOf('Nytt namn')] = 'Hej'

// console.log(names)

// delete - ta bort VÄRDET på en specifik plats men inte platsen
// delete names[1];
// delete names[names.indexOf('Hej')];

// console.log(names)


// .splice()  - tar bort och / eller lägger till ett värde från en specifik position

// names.splice(1, 1);   // tar bort 1 från index plats 1
names.splice(names.indexOf('Hej'), 1); // tar bort 1 från index platsen som 'Hej' har
names.splice(1, 0, 'Colin', 'Jeanette') // ta bort 0 från index plats 1 och lägger till Jeanette och Colin
names.splice(1, 2, 'Jack') // ta bort 2 från index plats 1 och lägga till Jack

names.splice(names.indexOf('Jack'), 1, 'Tommy', 'Haitem')

// console.log(names)

// Hur lång är en array
// console.log(names.length)

// Lägga ihop 2 arrayer
// console.log(names.concat(['Colin', 'Jeanette']))

// names = names.concat(['Colin', 'Jeanette'])

const arrayToAdd = ['Colin', 'Jeanette'];

// names.splice(names.length -1, 0, arrayToAdd);
names.splice(names.length -1, 0, ...arrayToAdd);

// console.log(names)



// Spread operator
const obj = {
  fName: 'Joakim',
  lName: 'Wahlström'
}



const obj2 = {
  email: 'joakim@mail.com',
  obj
}

/* 
    {
      email: 'joakim@mail.com',
      obj: {
          fName: 'Joakim',
          lName: 'Wahlström'
      }
    }
*/


//...obj

const obj3 = {
  email: 'joakim@mail.com',
  ...obj,
  fName: 'Hans'
}

// console.log(obj2)
// console.log(obj3)

const newNames = ['Ca', 'Bb', '1a', '2a', 'aa', 'bb']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// newNames.sort()
// console.log(newNames)

// numbers.sort((a, b) => {
//   return a - b
// })
// console.log(numbers)

console.log(names)

// names.sort()
// console.log(names)
// names.reverse()
// console.log(names)

names.sort().reverse()

console.log(names)