const add = function (...args) {
  return args.reduce((prev, value) => prev + Number(value), 0)
};

const subtract = function (...args) {
  return args.reduce((prev, value) => prev - Number(value))
};

const sum = function (args) {
  return args.reduce((prev, value) => prev + Number(value), 0)

};

const multiply = function (args) {
  return args.reduce((prev, value) => prev * Number(value))


};

const power = function (a, b) {
  return a ** b
};

const factorial = function (a) {
  if (a < 0) return false
  let result = 1
  for (let index = 2; index <= a; index++) {
    result *= index

  }
  return result

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
