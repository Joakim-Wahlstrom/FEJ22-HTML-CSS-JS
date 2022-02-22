/* 
  OBJECT
  -----------------------------------------------------------
  -innehåller ett eller flera värden

  skrivs som key:value par
  JSON (JavaScript Object Notation)

  JS Object
  const person = {
    firstName: 'Joakim',
    lastName: 'Wahlström'
  }

  JSON Object
  {
    "firstName": "Joakim",
    "lastName": "Wahlström"
  }

*/

// const person = { firstName: 'Joakim', lastName: 'Wahlström' }

const user = {
  firstName: 'Joakim',
  lastName: 'Wahlström',
  age: 35,
  address: {
    street: 'en gata',
    nr: 12,
    city: 'stan',
    zipCode: '72345'
  },
  isActive: true,
  phoneNumbers: ['076-234566', '070-4325646'],
  fullName: function() {}
}


// let key = 'isActive'

console.log(user)
// console.log(user.firstName);
// console.log(user['lastName']);
// console.log(user[key])

// console.log(`Användaren heter ${user.firstName} och bor i ${user.address.city}.`)

// user.firstName = 'John'

// user = 3;
// user = { name: 'Hans' }


// lägga till

user.email = 'joakim@mail.com'

// console.log(user)


// konvertera till JSON
let json = JSON.stringify(user)
// console.log(json)

// konertera från JSON till JS
let js = JSON.parse(json)
// console.log(js)


// let firstName = user.firstName;
// let lastName = user.lastName;
// let city = user.address.city;

// Destructure
const { firstName: fName, lastName, address: {city} } = user;

console.log(fName, lastName, city)

// const { fullName } = user;

// fullName()