// Object

// const product1 = {
//   productName: 'Product 1',
//   description: 'This is a product',
//   price: 100,
//   summary() {
//     return `The product ${this.productName} costs ${this.price}`
//   }
// }
// const product2 = {
//   productName: 'Product 2',
//   description: 'This is a product',
//   price: 200,
//   summary() {
//     return `The product ${this.productName} costs ${this.price}`
//   }
// }

// console.log(product1.summary())
// console.log(product2.summary())



function Product(name, price, desc) {
  this.productName = name
  this.price = price
  this.desc = desc

  // this.summary = function() {
  //   return `The product ${this.productName} costs ${this.price}`
  // }
}

Product.prototype.summary = function() {
  return `The product ${this.productName} costs ${this.price}`
}


const product1 = new Product('Product 1', 100, 'This is a product description')
const product2 = new Product('Product 2', 200, 'This is a product description')


console.log(product1.summary())
console.log(product2.summary())

console.log(product1)

