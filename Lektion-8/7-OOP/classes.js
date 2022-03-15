class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.loggedIn = false
  }

  login() {
    this.loggedIn = true
    console.log(`${this.firstName} has logged in`)
  }
  logout() {
    this.loggedIn = false
    console.log(`${this.firstName} has logged out`)
  }
}


let userOne = new User('Joakim', 'Wahlström', 'joakim@mail.com')
let userTwo = new User('Hans', 'mattin-Lassei', 'hans@mail.com')


// console.log(userOne, userTwo)

// userOne.login()
// userTwo.login()
// console.log(userOne)


// INHERITANCE

class Admin extends User {
  constructor(firstName, lastName, email, adminId) {
    super(firstName, lastName, email)
    this.adminIn = adminId
  }

  banUser(user) {
    console.log(`${user.firstName} has ben banned by ${this.firstName}`)
  }

  login() {
    super.login()
    console.log('this is an admin user')
  }
}



const admin = new Admin('Admin', 'Wahlström', 'admin@mail.com', '1')

// admin.login()
// console.log(admin)
// admin.banUser(userOne)
// userOne.banUser(userTwo)






class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(_value) {
    const parts = _value.split(' ')
    this.firstName = parts[0]
    this.lastName = parts[1]
    console.warn('changed the name')
  }

}


const p1 = new Person('Joakim', 'Wahlström')

// console.log(p1.firstName)
// console.log(p1.lastName)
// console.log(p1.fullName)

// p1.fullName = 'Hans Mattin-Lassei'

// console.log(p1.firstName)
// console.log(p1.lastName)
// console.log(p1.fullName)




// STATIC

class UserService {
  constructor(uri) {
    this.baseUri = uri
  }

  static signUp(user) {
    console.log('registrerar användaren')
    console.log(user)
  }

  static signIn(email, password) {
    console.log(`loggar in användaren med ${email} och ${password}`)
  }

}

// const userService = new UserService('http://localhost')

// userService.signUp({firstName: 'joakim', lastName: 'Wahlström'})
// userService.signIn('joakim@mail.com', 'BytMig123')


UserService.signUp({firstName: 'joakim', lastName: 'Wahlström'})
UserService.signIn('joakim@mail.com', 'BytMig123')