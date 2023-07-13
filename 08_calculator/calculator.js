const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(...args) {
  let product = 1;
  for (let i = 0; i < args.length; i++) {
    product *= args[i];
  }
  return product;
};

const power = function(base, pow) {
  /*
	let product = 1;
  for (let i = 0; i < pow; i++)
    product *= base;
  return product;
  */
 return Math.pow(base, pow);
};

const factorial = function(num) {
	let product = 1;
  for (let i = 1; i <= num; i++)
    product *= i;
  return product;
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
