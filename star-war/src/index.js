
var starWarsNames = require('./starWarsNames.json');
var uniqueRandomArray = require('unique-random-array');
module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
};
