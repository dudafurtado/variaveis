const prompt = require('prompt-sync')();

const fahr = prompt('What degree in Fahrenheit would like to transform: ');

let celsius;

const rightResult = fahr - 32;
const leftResult = 5 / 9;

celsius = rightResult * leftResult;
celsius = Math.round(celsius);

console.log(celsius);