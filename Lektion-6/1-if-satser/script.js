// BOOLEAN  true / false


// 0 = false
// 1 = true

// COMPARE STATEMENTS

let number = 13;
let string = '13';


// console.log(number == 13);
// console.log(number == 20);
// console.log(number != 13);
// console.log(number != 20);

// större än
// console.log(number > 10);

// större eller lika med
// console.log(number >= 13);

// mindre än
// console.log(number < 13);

// mindre eller lika med
// console.log(number <= 13);

// två = tecken, jämför bara värdet
// console.log(string == number);

// tre = tecken, jämför värdet och datatyp
// console.log(string === number);



// IF SATSER

// if(string == number) {
//   console.log(
//     'påståendet är sant: string == number'
//   )
// }

// if(string === number) {
//   console.log('påståendet är falskt')
// }

// if( string != number ){
//   console.log('påståendet falskt')
// }

// if(string !== number) {
//   console.log('påståendet är sant: string !== number')
// }





if(true) {
  // gör någonting här
  // console.log('det här körs alltid')
}

if(false) {
  // hoppa över det här
}


let isLoggedIn = true;


if(isLoggedIn) {
  console.log('användaren är inloggad')
  // visa mina sidor i navbaren
}
if(!isLoggedIn) {
  console.log('användaren är INTE inloggad')
  // dölj mina sidor och visa en länk till login sidan
}

let array = ['Joakim']

if(array.length) {
  console.log('arrayen innehåller någonting')
  // skriv ut all data på sidan
}

if(!array.length) {
  console.log('arrayen innehåller INTE någonting')
  // skriv ut att "här var det tomt"
}

let user = null
// user = {}

if(user) {
  console.log('det finns en användare')
}


/* 
  <     mindre än
  >     större än
  <=    mindre eller lika med
  >=    större eller lika med

  !     inte

  &&    och
  ||    eller
*/

let st = '15';
let nr = 13;

if(st > 15 && nr == 13) {
  console.log('här måste alla påståenden vara sant')
}

if(st > 15 || nr === 13) {
  console.log('här räcker det att ett av påståenena är sant')
}

if(st > nr || typeof st == typeof nr && nr > st) {
  console.log('är string större än nr, eller är string och numer samma datatyp och nr är större än st')
}


// if,  else if,  else

