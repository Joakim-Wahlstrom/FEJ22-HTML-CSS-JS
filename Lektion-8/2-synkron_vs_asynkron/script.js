console.log(1)
console.log(2)

// synkron kod
for(let i = 0; i<3; i++) {
  console.log('blockerar ' + i)
}

// asynkron kod
setTimeout(() => {
  console.log('timer klar')
}, 2000)

console.log(3)
console.log(4)


