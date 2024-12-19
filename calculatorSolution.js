function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return Infinity; // Or throw a custom error for better handling
  }
  return a / b;
}

const calculator = {
  add,
  subtract,
  multiply,
  divide
};

module.exports = calculator;