const convertToCelsius = function(tempInFah) {
  let conversion = (tempInFah - 32) * (5/9);
  if (conversion % 1 != 0) return Math.round(conversion * 10) /10;
  else return conversion;
};

const convertToFahrenheit = function(tempInCel) {
  let conversion = (tempInCel * 9/5) + 32;
  if (conversion % 1 != 0) return Math.round(conversion * 10) /10;
  else return conversion;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
