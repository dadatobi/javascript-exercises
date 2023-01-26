const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function([...arr]) {
  let tot = 0;
  for (i= 0; i < arr.length; i++) {
    tot = tot + arr[i];
  };
  return tot;
};

const multiply = function([...arr]) {
  let product = arr[0];
  for (i = 1; i< arr.length; i++) {
    product = product * arr[i];
  }
  return product;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(num) {
	let fac = 1
  if(num === 0) return fac;
  if (num > 0) {
    for (i= 1; i <= num; i++){
      fac = fac * i;
    }
    return fac;
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
