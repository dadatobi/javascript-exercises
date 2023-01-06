const convertToCelsius = function(num) {
  let celTemp = (num - 32) * 5/9;
  return parseFloat(celTemp.toFixed(1));
};

const convertToFahrenheit = function(num) {
  let farTemp = (num * (9/5)) + 32;
  return parseFloat(farTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
