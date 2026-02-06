const prompt = require('prompt-sync')();

let num = prompt("Digite um número: ");
let numRandom = Math.random() * 10;

if (num == numRandom) {
    console.log("Parabéns! Você acertou o número!");
} else {
    console.log("Que pena! O número correto era: " + numRandom.toFixed(0));
}