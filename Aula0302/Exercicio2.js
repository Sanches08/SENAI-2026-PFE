let prompt = require('prompt-sync')();

let numero = parseFloat(prompt("Digite um número: "));
let numero2 = parseFloat(prompt("Digite outro número: "));

let soma = numero + numero2;

console.log("A soma dos números é: " + soma);