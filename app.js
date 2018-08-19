// console.log('Hello world');

// == GLOBAL OBJECT ==
// setTimeout(() => {
  // console.log('3 secs have passed');
// }, 3000);

// let time = 0
// let timer = setInterval(() => {
//   time += 1;
//   console.log(`${time} seconds have passed`);
//   if (time >= 5) {
//     clearInterval(timer);
//   }
// }, 1000);

// console.log(__dirname);
// console.log(__filename);


// == FUNCTION EXPRESSIONS ==
// normal function
// function sayHello() {
//   console.log('hello');
// }
// sayHello();

// function expressions
// const sayHi = () => {
//   console.log('hi');
// };
// sayHi();

// menge-pass function
// function callFunction(fun) {
//   fun();
// }
// callFunction(sayHello);
// callFunction(sayHi);

// == MODULE AND REQUIRE() ==
const counter = require('./count');

console.log(counter(['John', 'Doe']));