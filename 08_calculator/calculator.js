const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((sum, element) => {
    return sum + element;
  }, 0);
};

const multiply = function (array) {
  return array.reduce((mul, element) => {
    return mul * element;
  }, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  if (n === 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
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
