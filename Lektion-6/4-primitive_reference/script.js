let scoreOne = 50;
let scoreTwo = scoreOne;



// console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`)

scoreOne = 100;

// console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`)


const userOne = { name: 'Joakim', age: 35 };

const userTwo = userOne;

const user3 = {...userOne};

console.log(userOne, userTwo, user3)

userOne.name = 'Hans'
userOne.age = 50


console.log(userOne, userTwo, user3)



const users = [
  { id: 1, name: 'Joakim', age: 35 },
  { id: 2, name: 'Hans', age: 50 },
  { id: 3, name: 'Jeanette', age: 34 }
]

const users2 = users.map(user => {
  return {...user}
})
// const users2 = [...users]
console.log(users, users2)


const hans = users.find(user => user.id === 2);
console.log(hans)


hans.age = 100
// console.log(hans)
console.log(users, users2)





