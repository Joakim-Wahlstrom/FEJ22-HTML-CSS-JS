let color = 'orange';


// if(color === 'black') {
//   console.log('the color is black');
// }
// else if(color === 'blue') {
//   console.log('the color is blue');
// }
// else if(color === 'orange') {
//   console.log('the color is orange');
// }
// else if(color === 'white') {
//   console.log('the color is white');
// }
// else if(color === 'red') {
//   console.log('the color is red');
// }
// else {
//   console.log('color unknown!');
// }



// SWITCH

switch(color) {
  case 'black':
    console.log('the color is black');
    break;
  case 'blue':
    console.log('the color is blue');
    break;
  case 'orange':
    console.log('the color is orange');
    break;
  case 'white':
    console.log('the color is white');
    break;
  case 'red':
    console.log('the color is red');    
    break;
  default:
    console.log('color unknown!');
}


// const action = { type: addToCart, payload: cartItem }

// switch(action.type) {
//   case addToCart:
//     shoppingCart.push(action.payload)
// }


let nr = 2;

switch(nr) {
  case '2':
    console.log('det är "2"')
    break;

  case 2:
    console.log('det är siffran 2')
}