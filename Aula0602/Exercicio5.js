const prompt = require('prompt-sync')();

let ano = prompt("Informe seu ano de nascimento: ");
let date = new Date();

let idade = date.getFullYear() - ano;

console.log("Sua idade é: " + idade);


