const prompt = require('prompt-sync')();

const weight = prompt('Insert here how much you weight: ');
const height = prompt('Insert here your height: ');

const bottomResult = Math.pow(height, 2);
let IMC = weight / bottomResult;

IMC = IMC.toFixed(1);

console.log(IMC);