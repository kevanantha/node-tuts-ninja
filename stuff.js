// 3 ways to exports module

// const array = (arr) => {
//   return `There are ${arr.length} elements in this array`;
// };

// const adder = (a, b) => {
//   return `${a} + ${b} = ${a + b}`;
// };

// const pi = 3.14;

// module.exports.array = array;
// module.exports.adder = adder;
// module.exports.pi = pi;

//  ================

// module.exports.array = (arr) => {
//   return `There are ${arr.length} elements in this array`;
// };

// module.exports.adder = (a, b) => {
//   return `${a} + ${b} = ${a + b}`;
// };

// module.exports.pi = 3.14;

//  ==============

const array = (arr) => {
  return `There are ${arr.length} elements in this array`;
};

const adder = (a, b) => {
  return `${a} + ${b} = ${a + b}`;
};

const pi = 3.14;

module.exports = {
  array: array,
  adder: adder,
  pi: pi
};