/* 
  NUMBERS
  -----------------------------------------------------------------

  +   lägg till
  -   ta bort
  *   gångra
  **  upphöjt i
  /   dela
  ++  öka med 1
  --  minska med 1
  %   division remainder

  =   lika med
  +=  lägg till
  -=  ta bort från
  *=  gångra och tilldela
  /=  dela och tilldela
  %=  division remainder

*/


let nr1 = 10;
let nr2 = 2.5;

// console.log(nr1, nr2);

// console.log(nr1 + nr2);
// console.log(nr1 - nr2);

nr1 = nr1 + 1;
nr1 += 1;
nr1 ++;

nr1 = nr1 - 1;
nr1 -= 1;
nr1 --;


// console.log(nr1)
// console.log(nr1 * nr2);
// console.log(nr1 ** nr2);
// console.log(nr1 % 4);

// console.log(6 % 2)
// console.log(7 % 2)


let randomNr = Math.ceil(Math.random() * 100)

// console.log(randomNr)

// console.log(Math.round(nr2))
// console.log(Math.ceil(nr2))
// console.log(Math.floor(nr2))


let text = 'text, '

text += 'En text som vi lägger till'

// console.log(text)


let datatype;

console.log(typeof datatype)
datatype = 'en text'
console.log(typeof datatype)
datatype = 3
console.log(typeof datatype)
datatype = true
console.log(typeof datatype)
datatype = {}
console.log(typeof datatype)
datatype = []
console.log(typeof datatype)
datatype = function() {}
console.log(typeof datatype)
datatype = null     // det här är en bugg i JavaScript
console.log(typeof datatype)
