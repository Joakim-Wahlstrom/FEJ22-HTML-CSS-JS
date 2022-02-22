/* 
    Datatyper
    -----------------------------------------
    String        =   Text
    Number        =   Tal, decimaltal, stora tal, små tal
    Boolean       =   true/false
    null          =   tomt, sätts manuellt
    undefined     =   tomt, har en blivit definerat. (automatiskt)
    Object        =   ett objekt/klass innehåller ett eller flera värden, Array är en objekt typ, function är också en slags objekt
    (Array)       =   objekt, lista
*/



/* 
  Variabler

  variabel = någonting som vi lagrar information i

  camelCase   =   javaScript, firstName, lastName, email, postalCode
  _private    =   _firstName = 'Joakim'




  Deklarera variabler
  ------------------------------------------------------------------

  name = 'Joakim' - global variabel
  var name = 'Joakim'
  let name = 'Joakim'
  const name = 'Joakim'


  var = global variabel - accessbar överallt i koden
  let = lokal variabel - accessbar bara inom det angivna området
  const = konstant, kan inte skrivas över (undantag finns)


  C# exempel.
    string name = "Joakim";
    int age = 35;

  JS exempel.
    let name = 'Joakim';
    let age = 35;

*/


/* 
  Strings:
    let name = "Joakim"
    let name = 'Joakim'
    let name = `Joakim`  (shift + ´ , tryck mellanslag)
*/


// let name = 'Joakim';
// let age = 35;

// console.log(name, age)


// let withoutPlaceholders = 'Mitt namn är ' + name + ' och jag är ' + age + ' år gammal.'

// Template string
// let withPlaceholders = `Mitt namn är ${name} och jag är ${age} år gammal`

// console.log(withoutPlaceholders)
// console.log(withPlaceholders)


var varName = 'var Joakim';
let letName = 'let Joakim';
const constName = 'const Joakim';


// console.log(varName)
// console.log(letName)
// console.log(constName)

varName = 'var John'
letName = 32
// constName = 'const John'

// console.log(varName)
// console.log(letName)


let firstName = 'Joakim';
let lastName = 'Wahlström'

let myName = firstName + ' ' + lastName

console.log(myName)


console.log(myName.length);
console.log(myName[0]);
console.log(myName[1]);
console.log(myName.indexOf('a'))
console.log(myName.lastIndexOf('a'))

console.log(myName.toUpperCase())
console.log(myName.toLowerCase())

let names = myName.split(' ')

console.log(names)
let _fName = names[0]

console.log(_fName)

console.log(`Hej ${_fName}, Välkommen tillbaka`)