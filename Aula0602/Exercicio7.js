const prompt = require('prompt-sync')();

let num = prompt("Digite um número decimal: ");

console.log("O número digitado aproximado foi: " + Math.round(num));